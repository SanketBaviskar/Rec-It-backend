/*
  Warnings:

  - You are about to drop the column `birthday` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthday",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ALTER COLUMN "role" SET DEFAULT '0';
