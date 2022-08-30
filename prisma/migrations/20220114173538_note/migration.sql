-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "pressure" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "symptoms" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classification" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
