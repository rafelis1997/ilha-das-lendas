/*
  Warnings:

  - A unique constraint covering the columns `[teamLinkName]` on the table `teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "teams_teamLinkName_key" ON "teams"("teamLinkName");
