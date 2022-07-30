/*
  Warnings:

  - Added the required column `color` to the `spaces` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `spaces` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_spaces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_spaces" ("created_at", "description", "id", "name", "updated_at") SELECT "created_at", "description", "id", "name", "updated_at" FROM "spaces";
DROP TABLE "spaces";
ALTER TABLE "new_spaces" RENAME TO "spaces";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
