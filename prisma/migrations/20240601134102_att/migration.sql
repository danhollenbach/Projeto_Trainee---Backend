/*
  Warnings:

  - You are about to drop the column `disciplinaId` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `Disciplina` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Professor" ("createdAt", "departamento", "id", "name", "updateAt") SELECT "createdAt", "departamento", "id", "name", "updateAt" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE TABLE "new_Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Disciplina" ("createdAt", "id", "name", "updateAt") SELECT "createdAt", "id", "name", "updateAt" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "departamento" TEXT,
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
PRAGMA foreign_key_check("Professor");
PRAGMA foreign_key_check("Disciplina");
PRAGMA foreign_key_check("Users");
PRAGMA foreign_keys=ON;
