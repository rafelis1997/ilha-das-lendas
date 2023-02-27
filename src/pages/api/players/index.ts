import puppeteer from 'puppeteer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { PlayerDto } from "@/Dtos/playerDto";
import { Optional } from "@/pages/api/types/Optional";

type playerOptional = Optional<PlayerDto, "playerPhoto" | "playerNick" | "playerName">
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  if (req.method === 'POST') {
    let teamsRaw = []
    let players: Omit<playerOptional, "id" | "teamId" | "score" | "mainRoaster">[] = []

    const pupp = async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()

      await page.goto(
        'https://lolesports.com/standings/cblol-brazil/cblol_2023_split_1/regular_season'
      )

      const teamSelector = '.ranking'
      await page.waitForSelector(teamSelector)

      teamsRaw = await page.$$eval('.ranking', (element) =>
        element.map((team) => {
          const teamName = team.querySelector('.name')?.innerHTML
          const teamLink = team.getAttribute('href')

          return {
            teamName,
            teamLink: `https://lolesports.com${teamLink}`,
          }
        })
      )

      for (let team of teamsRaw) {
        await page.goto(team.teamLink)
        await page.waitForSelector('.card')

        players = await page.$$eval('.card', (element) =>
          element.map((playerCard) => {
            const playerInfo = playerCard.querySelector('.info')
            const playerPhotoStyle = playerInfo?.getAttribute('style')
            const playerPhoto = playerPhotoStyle?.split('"')[1]
            const playerRoleSVg = playerInfo?.querySelector('.icon')
            const tempDiv = document.createElement('div')
            tempDiv.appendChild(playerRoleSVg as Element)
            const playerRole = JSON.stringify(tempDiv.innerHTML)
            const playerNick =
              playerInfo?.querySelector('.summoner-name')?.innerHTML
            const playerName =
              playerInfo?.querySelector('.real-name')?.innerHTML

            return {
              playerPhoto,
              playerRole,
              playerNick,
              playerName,
            }
          })
        )

        const teamData = await prisma.team.findUnique({
          where: {
            teamName: team.teamName,
          },
        })

        for (let player of players) {
          if (player && player.playerName && player.playerNick && teamData) {
            const playerData = await prisma.player.findFirst({
              where: {
                playerNick: player.playerNick,
              },
            })

            if (playerData) {
              await prisma.player.update({
                where: {
                  playerNick: player.playerNick,
                },
                data: {
                  playerName: player.playerName,
                  playerPhoto: player.playerPhoto,
                  playerRole: player.playerRole,
                  playerNick: player.playerNick,
                  teamId: teamData?.id,
                },
              })
            } else {
              await prisma.player.create({
                data: {
                  playerName: player.playerName,
                  playerPhoto: player.playerPhoto!,
                  playerRole: player.playerRole,
                  playerNick: player.playerNick,
                  teamId: teamData?.id,
                },
              })
            }
          }
        }
      }

      await browser.close()
    }

    await pupp()

    res.status(201).json(players)
  }
}
