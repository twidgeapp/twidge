/*
  Warnings:

  - You are about to drop the column `type` on the `Elements` table. All the data in the column will be lost.
  - Added the required column `elementType` to the `Elements` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Elements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "elementType" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "spacesId" INTEGER NOT NULL,
    CONSTRAINT "Elements_spacesId_fkey" FOREIGN KEY ("spacesId") REFERENCES "spaces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Elements" ("content", "createdAt", "id", "spacesId", "updatedAt") SELECT "content", "createdAt", "id", "spacesId", "updatedAt" FROM "Elements";
DROP TABLE "Elements";
ALTER TABLE "new_Elements" RENAME TO "Elements";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
