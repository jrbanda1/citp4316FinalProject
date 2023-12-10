/*
  Warnings:

  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Employee";

-- CreateTable
CREATE TABLE "City" (
    "departmentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("departmentId")
);

-- CreateTable
CREATE TABLE "Attraction" (
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "quote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attraction_pkey" PRIMARY KEY ("employeeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attraction_email_key" ON "Attraction"("email");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Country"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attraction" ADD CONSTRAINT "Attraction_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "City"("departmentId") ON DELETE RESTRICT ON UPDATE CASCADE;
