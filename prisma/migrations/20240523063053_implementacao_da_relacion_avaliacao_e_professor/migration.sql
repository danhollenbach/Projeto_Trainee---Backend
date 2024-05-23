-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uptadeAt" DATETIME NOT NULL,
    CONSTRAINT "Avaliacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("conteudo", "createdAt", "disciplinaId", "id", "professorId", "uptadeAt", "userId") SELECT "conteudo", "createdAt", "disciplinaId", "id", "professorId", "uptadeAt", "userId" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "password" TEXT NOT NULL,
    "departamento" TEXT,
    "curso" TEXT NOT NULL,
    "profilephoto" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updadteAt" DATETIME NOT NULL
);
INSERT INTO "new_Users" ("age", "createdAt", "curso", "departamento", "email", "id", "name", "password", "profilephoto", "updadteAt", "username") SELECT "age", "createdAt", "curso", "departamento", "email", "id", "name", "password", "profilephoto", "updadteAt", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check("Avaliacao");
PRAGMA foreign_key_check("Users");
PRAGMA foreign_keys=ON;
