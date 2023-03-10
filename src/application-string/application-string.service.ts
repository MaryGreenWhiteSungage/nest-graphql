import { Inject, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateApplicationStringInput } from './dto/create-application-string.input/create-application-string.input';

import { ApplicationString } from './models/application-string.model/application-string.model';

@Injectable()
export class ApplicationStringService {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
    private readonly prisma: PrismaService, // 👈👈nest
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
    return this.prisma.applicationString.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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
      return returnValue;
    } catch (e) {
      this.logger.debug('findOne Error', e);
      throw new Error(`${__filename} : ${e}`);
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
      this.logger.debug('findById Error', e);
      throw new Error(`${__filename} : ${e}`);
    }
  }

  async create(dataIn: CreateApplicationStringInput) {
    this.logger.debug('Calling create.');
    if (!dataIn) {
      throw new Error(`${__filename} : missing input value createInput`);
    }
    let data: Prisma.ApplicationStringCreateInput;
    data.createdDate = new Date();
    data.modifiedDate = new Date();
    data.applicationStringType = dataIn.applicationStringType;
    data.key = dataIn.key;
    data.value = dataIn.value;

    return this.prisma.applicationString.create({ data });
  }

  async update(id: number, data: Prisma.ApplicationStringUpdateInput) {
    this.logger.debug('Calling update.');
    if (!data) {
      throw new Error(`${__filename} : missing input value updateInput`);
    }
    if (!id) {
      throw new Error(`${__filename} : missing input value id`);
    }

    const currentTime = new Date();

    data.modifiedDate = currentTime;

    return this.prisma.applicationString.update({
      data,
      where: { id },
    });
  }

  async delete(id: number) {
    this.logger.debug('Calling delete.');
    if (!id) {
      this.logger.debug('test', new Error(`Id not found.`));
      throw new Error(`${__filename} : missing input value id`);
    }
    try {
      return this.prisma.applicationString.delete({
        where: { id },
      });
    } catch (e) {
      this.logger.debug('delete Error', e);
      throw new Error(`${__filename} : ${e}`);
    }
  }
}
