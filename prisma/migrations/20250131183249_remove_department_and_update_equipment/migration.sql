/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Equipments` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `Inventories` table. All the data in the column will be lost.
  - You are about to drop the `Departments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Equipments" DROP CONSTRAINT "Equipments_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Inventories" DROP CONSTRAINT "Inventories_departmentId_fkey";

-- AlterTable
ALTER TABLE "Equipments" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "Inventories" DROP COLUMN "departmentId";

-- DropTable
DROP TABLE "Departments";
