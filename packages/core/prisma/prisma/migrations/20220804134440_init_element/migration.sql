-- CreateTable
CREATE TABLE "Element" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_spaces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "elementId" INTEGER,
    CONSTRAINT "spaces_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "Element" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_spaces" ("color", "created_at", "description", "icon", "id", "name", "updated_at") SELECT "color", "created_at", "description", "icon", "id", "name", "updated_at" FROM "spaces";
DROP TABLE "spaces";
ALTER TABLE "new_spaces" RENAME TO "spaces";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
