/*
  Warnings:

  - A unique constraint covering the columns `[PlayerNick]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "players_PlayerNick_key" ON "players"("PlayerNick");
