-- CreateEnum
CREATE TYPE "TipoAluno" AS ENUM ('M', 'T', 'F');

-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "tipo" "TipoAluno" NOT NULL DEFAULT 'M';
