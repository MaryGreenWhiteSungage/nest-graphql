-- CreateTable
CREATE TABLE "ApplicationString" (
    "id" SERIAL NOT NULL,
    "key" VARCHAR NOT NULL,
    "applicationStringType" VARCHAR NOT NULL,
    "value" VARCHAR NOT NULL,
    "createdDate" TIMESTAMP(6) NOT NULL,
    "modifiedDate" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "PK_60ebb46ef93da5983bffd9c9766" PRIMARY KEY ("id")
);
