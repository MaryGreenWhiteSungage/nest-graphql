import { Inject, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateApplicationStringInput } from '../dto/create-application-string.input/create-application-string.input';
import { PrismaService } from './prisma.service';
import { ApplicationString } from '../models/application-string.model/application-string.model';
import { BaseError } from 'src/shared/errors/graphQLBaseError';
import { StatusCode } from 'shared/errorCode';

@Injectable()
export class ApplicationStringService {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
    private readonly prisma: PrismaService,
  ) {}

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ApplicationStringWhereUniqueInput;
    where?: Prisma.ApplicationStringWhereInput;
    orderBy?: Prisma.ApplicationStringOrderByWithRelationInput;
  }): Promise<ApplicationString[]> {
    const { skip, take, cursor, where, orderBy } = params;
    this.logger.debug('Calling findAll.');
    try {
      return this.prisma.applicationString.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.BAD_REQUEST, {});
    }
  }

  async findUnique(
    userWhereUniqueInput: Prisma.ApplicationStringWhereUniqueInput,
  ): Promise<ApplicationString | null> {
    return this.prisma.applicationString.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findOne(key: string) {
    this.logger.debug('Calling findOne.');
    if (!key) {
      this.logger.debug('test', new Error(`Key not found.`));
      throw new Error(`${__filename} : missing input value key`);
    }
    try {
      this.logger.debug('Calling findOne.');
      const returnValue = await this.prisma.applicationString.findFirst({
        where: { key: key },
      });
      if (!returnValue) {
        throw new Error(`Record for key: ${key} was not found.`);
      }
      return returnValue;
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.NOT_FOUND, {});
    }
  }

  async findById(id: number) {
    this.logger.debug('Calling findById.');
    if (!id) {
      this.logger.debug('test', new Error(`ID not found.`));
      throw new Error(`${__filename} : missing input value key`);
    }
    try {
      const returnValue = await this.findUnique({ id });
      return returnValue;
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.BAD_REQUEST, {});
    }
  }

  async create(dataIn: CreateApplicationStringInput) {
    this.logger.debug(`Calling create. ${JSON.stringify(dataIn)}`);
    if (!dataIn) {
      throw new Error(`${__filename} : missing input value createInput`);
    }
    try {
      const data: Prisma.ApplicationStringCreateInput = {
        createdDate: new Date(),
        modifiedDate: new Date(),
        ...dataIn,
      };

      data.applicationStringType = dataIn.applicationStringType;
      data.key = dataIn.key;
      data.value = dataIn.value;

      return this.prisma.applicationString.create({ data });
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.BAD_REQUEST, {});
    }
  }

  async update(id: number, dataIn: Prisma.ApplicationStringUpdateInput) {
    this.logger.debug('Calling update.');
    if (!dataIn) {
      throw new Error(`${__filename} : missing input value updateInput`);
    }
    if (!id) {
      throw new Error(`${__filename} : missing input value id`);
    }

    try {
      const data: Prisma.ApplicationStringUpdateInput = {
        modifiedDate: new Date(),
        ...dataIn,
      };

      return this.prisma.applicationString.update({
        data,
        where: { id: id },
      });
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.BAD_REQUEST, {});
    }
  }

  async delete(id: number) {
    this.logger.debug('Calling delete.');
    if (!id) {
      this.logger.debug('test', new Error(`Id not found.`));
      throw new Error(`delete : missing input value id`);
    }
    try {
      return await this.prisma.applicationString.delete({
        where: { id },
      });
    } catch (e) {
      throw new BaseError(e.message, e.code, StatusCode.BAD_REQUEST, {});
    }
  }
}
