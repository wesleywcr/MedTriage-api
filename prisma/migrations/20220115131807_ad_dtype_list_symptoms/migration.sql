/*
  Warnings:

  - The `symptoms` column on the `Note` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "symptoms",
ADD COLUMN     "symptoms" TEXT[];
