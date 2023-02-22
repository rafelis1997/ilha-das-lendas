import puppeteer from 'puppeteer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  if (req.method === 'GET') {
    const { teamName } = req.query

    console.log(teamName)

    if (teamName && typeof teamName === 'string') {
      const team = await prisma.team.findUnique({
        where: {
          teamLinkName: teamName,
        },
        include: {
          player: {
            include: {
              score: {
                orderBy: {
                  createdAt: 'desc',
                },
                select: {
                  score: true,
                },
              },
            },
          },
        },
      })

      return res.status(200).json(team)
    }

    return res.status(404).json('not found')
  }
}
