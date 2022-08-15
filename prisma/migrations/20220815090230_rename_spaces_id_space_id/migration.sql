/*
  Warnings:

  - You are about to drop the column `spacesId` on the `elements` table. All the data in the column will be lost.
  - Added the required column `spaceId` to the `elements` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_elements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "elementType" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "positionX" INTEGER NOT NULL DEFAULT 0,
    "positionY" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "spaceId" INTEGER NOT NULL,
    CONSTRAINT "elements_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "spaces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_elements" ("content", "createdAt", "elementType", "id", "positionX", "positionY", "updatedAt") SELECT "content", "createdAt", "elementType", "id", "positionX", "positionY", "updatedAt" FROM "elements";
DROP TABLE "elements";
ALTER TABLE "new_elements" RENAME TO "elements";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
