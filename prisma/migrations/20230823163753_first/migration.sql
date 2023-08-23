-- CreateTable
CREATE TABLE "ApplicationString" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR NOT NULL,
    "applicationStringType" VARCHAR NOT NULL,
    "value" VARCHAR NOT NULL,
    "createdDate" TIMESTAMP(6) NOT NULL,
    "modifiedDate" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ApplicationString_pkey" PRIMARY KEY ("id")
);
