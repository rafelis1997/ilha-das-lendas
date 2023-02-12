import puppeteer from "puppeteer";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type teamsData = {
  teamName: string;
  teamRecord: string;
  teamLogo: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "PUT" && req.method !== "GET") {
    return res.status(405).end();
  }

  if (req.method === "GET") {
    const teams = await prisma.team.findMany({
      orderBy: {
        position: "asc",
      },
    });

    return res.status(200).json(teams);
  }

  if (req.method === "POST") {
    let teams: teamsData[];

    const pupp = async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(
        "https://lolesports.com/standings/cblol-brazil/cblol_2023_split_1/regular_season"
      );

      const teamSelector = ".ranking";
      await page.waitForSelector(teamSelector);

      teams = await page.$$eval(".ranking", (element) =>
        element
          .map((team) => {
            const teamName = team.querySelector(".name");
            const teamLogo = team.querySelector(".logo");
            const teamRecord = team.querySelector(".record");

            const dataFound = teamName && teamLogo && teamRecord;

            if (dataFound) {
              return {
                teamName: teamName.innerHTML,
                teamRecord: teamRecord.innerHTML,
                teamLogo: teamLogo.getAttribute("src"),
              } as teamsData;
            }
            return null;
          })
          .filter(Boolean)
      );

      await browser.close();
    };

    await pupp();

    for (const team of teams) {
      if (team && team.teamName) {
        const teamData = await prisma.team.findFirst({
          where: {
            teamName: team.teamName,
          },
        });

        if (teamData) {
          await prisma.team.update({
            where: {
              teamName: team.teamName,
            },
            data: {
              teamRecord: team.teamRecord,
            },
          });
        } else {
          await prisma.team.create({
            data: {
              teamName: team.teamName,
              teamRecord: team.teamRecord,
              teamLogo: team.teamLogo,
            },
          });
        }
      }
    }

    res.status(201).json(teams);
  }

  if (req.method === "PUT") {
    let teams = [];

    const pupp = async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(
        "https://lolesports.com/standings/cblol-brazil/cblol_2023_split_1/regular_season"
      );

      const teamSelector = ".ranking";
      await page.waitForSelector(teamSelector);

      teams = await page.$$eval(".ranking", (element) =>
        element.map((team) => {
          const teamName = team.querySelector(".name");
          const teamLogo = team.querySelector(".logo");
          const teamRecord = team.querySelector(".record");
          const teamPosition = team.querySelector(".ordinal");
          return {
            teamName: teamName?.innerHTML,
            teamRecord: teamRecord?.innerHTML,
            teamLogo: teamLogo?.getAttribute("src"),
            position: Number(teamPosition?.innerHTML),
          };
        })
      );

      await browser.close();
    };

    await pupp();

    for (const team of teams) {
      if (team && team.teamName) {
        const teamData = await prisma.team.findFirst({
          where: {
            teamName: team.teamName,
          },
        });

        if (teamData) {
          await prisma.team.update({
            where: {
              teamName: team.teamName,
            },
            data: {
              teamRecord: team.teamRecord,
              position: team.position,
            },
          });
        } else {
          await prisma.team.create({
            data: {
              teamName: team.teamName,
              teamRecord: team.teamRecord,
              teamLogo: team.teamLogo,
              position: team.position,
            },
          });
        }
      }
    }

    res.status(201).json(teams);
  }
}
