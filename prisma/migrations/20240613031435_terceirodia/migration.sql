/*
  Warnings:

  - Made the column `departamento` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN "foto" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "profilephoto" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updadteAt" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("createdAt", "curso", "departamento", "email", "id", "name", "password", "profilephoto", "updadteAt", "username") SELECT "createdAt", "curso", "departamento", "email", "id", "name", "password", "profilephoto", "updadteAt", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check("Users");
PRAGMA foreign_keys=ON;
