/*
  Warnings:

  - You are about to drop the column `PlayerName` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `PlayerNick` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `PlayerRole` on the `players` table. All the data in the column will be lost.
  - Added the required column `playerName` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerNick` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerRole` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "teams" ADD COLUMN "mainRoaster" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerPhoto" TEXT NOT NULL,
    "playerRole" TEXT NOT NULL,
    "playerNick" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_players" ("createdAt", "id", "playerPhoto", "teamId", "updatedAt") SELECT "createdAt", "id", "playerPhoto", "teamId", "updatedAt" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
CREATE UNIQUE INDEX "players_playerPhoto_key" ON "players"("playerPhoto");
CREATE UNIQUE INDEX "players_playerNick_key" ON "players"("playerNick");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
