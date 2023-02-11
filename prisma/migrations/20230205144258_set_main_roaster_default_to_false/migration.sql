-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerPhoto" TEXT NOT NULL,
    "playerRole" TEXT NOT NULL,
    "playerNick" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "mainRoaster" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_players" ("createdAt", "id", "mainRoaster", "playerName", "playerNick", "playerPhoto", "playerRole", "teamId", "updatedAt") SELECT "createdAt", "id", coalesce("mainRoaster", false) AS "mainRoaster", "playerName", "playerNick", "playerPhoto", "playerRole", "teamId", "updatedAt" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
CREATE UNIQUE INDEX "players_playerPhoto_key" ON "players"("playerPhoto");
CREATE UNIQUE INDEX "players_playerNick_key" ON "players"("playerNick");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
