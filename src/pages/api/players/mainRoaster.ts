import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

type RequestBody = {
  playersId: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { playersId } = req.body as RequestBody;

  if (playersId && playersId.length > 0) {
    for (let player of playersId) {
      await prisma.player.update({
        where: {
          id: player,
        },
        data: {
          mainRoaster: true,
        },
      });
    }
    res.status(201).end();
  }

  res.status(501).json({ message: "Not able to set mainRoaster for players" });
}
