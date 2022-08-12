-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_spaces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "index" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_spaces" ("color", "createdAt", "description", "icon", "id", "name", "updatedAt") SELECT "color", "createdAt", "description", "icon", "id", "name", "updatedAt" FROM "spaces";
DROP TABLE "spaces";
ALTER TABLE "new_spaces" RENAME TO "spaces";
CREATE UNIQUE INDEX "spaces_name_key" ON "spaces"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
