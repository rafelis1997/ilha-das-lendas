/*
  Warnings:

  - You are about to drop the column `mainRoaster` on the `teams` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "players" ADD COLUMN "mainRoaster" BOOLEAN;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_teams" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "teamName" TEXT NOT NULL,
    "teamRecord" TEXT NOT NULL,
    "teamLogo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_teams" ("createdAt", "id", "teamLogo", "teamName", "teamRecord", "updatedAt") SELECT "createdAt", "id", "teamLogo", "teamName", "teamRecord", "updatedAt" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
CREATE UNIQUE INDEX "teams_teamName_key" ON "teams"("teamName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
