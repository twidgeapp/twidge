/*
  Warnings:

  - You are about to drop the column `type` on the `Element` table. All the data in the column will be lost.
  - Added the required column `dType` to the `Element` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Element" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dType" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Element" ("created_at", "id", "updated_at", "value") SELECT "created_at", "id", "updated_at", "value" FROM "Element";
DROP TABLE "Element";
ALTER TABLE "new_Element" RENAME TO "Element";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
