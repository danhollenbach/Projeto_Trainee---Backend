/*
  Warnings:

  - Added the required column `disciplinaId` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "disciplinaId" INTEGER NOT NULL
);
INSERT INTO "new_Professor" ("createdAt", "departamento", "id", "name", "updateAt") SELECT "createdAt", "departamento", "id", "name", "updateAt" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check("Professor");
PRAGMA foreign_keys=ON;
