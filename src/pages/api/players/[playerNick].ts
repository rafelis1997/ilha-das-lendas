import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { playerNick } = req.query

  const playerData = await prisma.player.findUnique({
    where: {
      playerNick: playerNick as string,
    },
    include: {
      score: true,
    },
  })

  return res.status(200).json(playerData)
}
