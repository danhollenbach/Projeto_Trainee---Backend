-- CreateTable
CREATE TABLE "_DisciplinaToProfessor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DisciplinaToProfessor_A_fkey" FOREIGN KEY ("A") REFERENCES "Disciplina" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DisciplinaToProfessor_B_fkey" FOREIGN KEY ("B") REFERENCES "Professor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplinaToProfessor_AB_unique" ON "_DisciplinaToProfessor"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplinaToProfessor_B_index" ON "_DisciplinaToProfessor"("B");
