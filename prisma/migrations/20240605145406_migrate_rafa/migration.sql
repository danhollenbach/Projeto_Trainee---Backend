/*
  Warnings:

  - You are about to drop the `_DisciplinaToProfessor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_DisciplinaToProfessor_B_index";

-- DropIndex
DROP INDEX "_DisciplinaToProfessor_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_DisciplinaToProfessor";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "avaliacaoId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Comentarios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Comentarios_avaliacaoId_fkey" FOREIGN KEY ("avaliacaoId") REFERENCES "Avaliacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentarios" ("avaliacaoId", "conteudo", "createdAt", "id", "updateAt", "userId") SELECT "avaliacaoId", "conteudo", "createdAt", "id", "updateAt", "userId" FROM "Comentarios";
DROP TABLE "Comentarios";
ALTER TABLE "new_Comentarios" RENAME TO "Comentarios";
CREATE TABLE "new_Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "professorId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uptadeAt" DATETIME NOT NULL,
    CONSTRAINT "Avaliacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("conteudo", "createdAt", "disciplinaId", "id", "professorId", "uptadeAt", "userId") SELECT "conteudo", "createdAt", "disciplinaId", "id", "professorId", "uptadeAt", "userId" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check("Comentarios");
PRAGMA foreign_key_check("Avaliacao");
PRAGMA foreign_keys=ON;
