-- CreateTable
CREATE TABLE "spaces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "index" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- CreateTable
CREATE TABLE "elements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "elementType" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "positionX" INTEGER NOT NULL DEFAULT 0,
    "positionY" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "spacesId" INTEGER NOT NULL,
    CONSTRAINT "elements_spacesId_fkey" FOREIGN KEY ("spacesId") REFERENCES "spaces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateIndex
CREATE UNIQUE INDEX "_migrations_checksum_key" ON "_migrations"("checksum");
-- CreateIndex
CREATE UNIQUE INDEX "spaces_name_key" ON "spaces"("name");