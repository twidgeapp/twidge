/*
  Warnings:

  - You are about to drop the `Journals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `journalsId` on the `Notes` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Journals";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "spacesId" INTEGER NOT NULL,
    CONSTRAINT "Notes_spacesId_fkey" FOREIGN KEY ("spacesId") REFERENCES "Spaces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Notes" ("content", "createdAt", "id", "spacesId", "title", "updatedAt") SELECT "content", "createdAt", "id", "spacesId", "title", "updatedAt" FROM "Notes";
DROP TABLE "Notes";
ALTER TABLE "new_Notes" RENAME TO "Notes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
