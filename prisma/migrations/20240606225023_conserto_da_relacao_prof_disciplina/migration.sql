/*
  Warnings:

  - You are about to drop the `_DisciplinaToProfessor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `professorId` to the `Disciplina` table without a default value. This is not possible if the table is not empty.

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
CREATE TABLE "new_Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "professorId" INTEGER NOT NULL,
    CONSTRAINT "Disciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Disciplina" ("createdAt", "id", "name", "updateAt") SELECT "createdAt", "id", "name", "updateAt" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
PRAGMA foreign_key_check("Disciplina");
PRAGMA foreign_keys=ON;
