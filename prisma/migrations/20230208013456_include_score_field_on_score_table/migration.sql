/*
  Warnings:

  - Added the required column `score` to the `scores` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_scores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "score" INTEGER NOT NULL,
    "playerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "scores_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_scores" ("createdAt", "id", "playerId") SELECT "createdAt", "id", "playerId" FROM "scores";
DROP TABLE "scores";
ALTER TABLE "new_scores" RENAME TO "scores";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
