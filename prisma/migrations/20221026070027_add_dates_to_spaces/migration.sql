-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_space" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_space" ("accentColor", "color", "description", "icon", "id", "name", "primaryColor") SELECT "accentColor", "color", "description", "icon", "id", "name", "primaryColor" FROM "space";
DROP TABLE "space";
ALTER TABLE "new_space" RENAME TO "space";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
