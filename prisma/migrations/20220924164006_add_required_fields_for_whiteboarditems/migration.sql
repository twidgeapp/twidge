/*
  Warnings:

  - Added the required column `height` to the `WhiteboardItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posX` to the `WhiteboardItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posY` to the `WhiteboardItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `WhiteboardItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhiteboardItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "posX" INTEGER NOT NULL,
    "posY" INTEGER NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "whiteboardId" INTEGER NOT NULL,
    CONSTRAINT "WhiteboardItem_whiteboardId_fkey" FOREIGN KEY ("whiteboardId") REFERENCES "Whiteboard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhiteboardItem" ("createdAt", "id", "item_type", "updatedAt", "value", "whiteboardId") SELECT "createdAt", "id", "item_type", "updatedAt", "value", "whiteboardId" FROM "WhiteboardItem";
DROP TABLE "WhiteboardItem";
ALTER TABLE "new_WhiteboardItem" RENAME TO "WhiteboardItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
