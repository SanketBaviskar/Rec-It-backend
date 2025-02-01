/*
  Warnings:

  - You are about to drop the column `cost` on the `Inventories` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Inventories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inventories" DROP COLUMN "cost",
DROP COLUMN "quantity";
