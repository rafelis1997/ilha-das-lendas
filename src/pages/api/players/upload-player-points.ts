import { NextApiHandler, NextApiRequest } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'
import fsPromise from 'fs/promises'
import csvParser from 'csv-parser'
import { prisma } from '@/lib/prisma'

export const config = {
  api: {
    bodyParser: false,
  },
}

interface ResultsType {
  nick: string
  pontuacao: string
}

let fileName = ''
let filePath = ''
let results = [] as ResultsType[]

const readFile = (
  req: NextApiRequest,
  saveLocally: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {}

  if (saveLocally) {
    filePath = path.join(process.cwd(), '/tmp')
    options.uploadDir = filePath
    options.filename = (name, ext, path, form) => {
      fileName = Date.now().toString() + '_' + path.originalFilename
      return fileName
    }
  }

  const form = formidable(options)
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)

      resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    await fsPromise.readdir(path.join(process.cwd() + '/tmp'))
  } catch (error) {
    await fsPromise.mkdir(path.join(process.cwd(), '/tmp'))
  }
  await readFile(req, true)

  fs.createReadStream(filePath + '/' + fileName)
    .pipe(csvParser({}))
    .on('data', (data: any) => results.push(data))
    .on('end', async () => {
      for (let result of results) {
        console.log(result)
        const player = await prisma.player.findUnique({
          where: {
            playerNick: result.nick,
          },
        })

        if (player) {
          await prisma.score.create({
            data: {
              score: Number(result.pontuacao) as number,
              playerId: player.id,
            },
          })
        }
      }

      if (fs.existsSync(filePath + '/' + fileName)) {
        fs.unlink(filePath + '/' + fileName, (err) => {
          if (err) {
            console.log(err)
          }
          console.log('deleted')
        })
      }
    })

  res.status(200).json('Points parsed!')
}

export default handler
