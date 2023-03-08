import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateApplicationStringInput } from 'src/coffees/dto/update-application-string.input/update-application-string.input';
import { Repository } from 'typeorm/repository/Repository';
import { CreateApplicationStringInput } from './dto/create-application-string.input/create-application-string.input';
import { ApplicationString } from './models/application-string.model/application-string.model';

@Injectable()
export class ApplicationStringService {
  constructor(
    @Inject(Logger)
    private readonly logger: Logger,
    @InjectRepository(ApplicationString)
    private readonly repository: Repository<ApplicationString>, // 👈👈nest
  ) {}
  async findAll() {
    this.logger.debug('Calling findAll.');
    return await this.repository.find();
  }

  async findOne(key: string) {
    this.logger.debug('Calling findOne.');
    if (!key) {
      this.logger.debug('test', new Error(`Key not found.`));
      throw new Error(`${__filename} : missing input value key`);
    }
    try {
      const returnValue = await this.repository.findOne({ where: { key } });
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
      const returnValue = await this.repository.findOne({ where: { id } });
      return returnValue;
    } catch (e) {
      this.logger.debug('findById Error', e);
      throw new Error(`${__filename} : ${e}`);
    }
  }

  async create(createInput: CreateApplicationStringInput) {
    this.logger.debug('Calling create.');
    if (!createInput) {
      throw new Error(`${__filename} : missing input value createInput`);
    }
    const currentTime = new Date();
    const newObject = this.repository.create(createInput);
    newObject.createdDate = currentTime;
    newObject.modifiedDate = currentTime;
    return await this.repository.save(newObject);
  }

  async update(id: number, updateInput: UpdateApplicationStringInput) {
    this.logger.debug('Calling update.');
    if (!updateInput) {
      throw new Error(`${__filename} : missing input value updateInput`);
    }
    if (!id) {
      throw new Error(`${__filename} : missing input value id`);
    }
    const currentTime = new Date();
    const newObject: ApplicationString = await this.repository.preload({
      id,
      ...updateInput,
    });
    if (!newObject) {
      throw new Error(`${__filename} : Could not find record for : ${id}`);
    }
    newObject.modifiedDate = currentTime;
    return await this.repository.save(newObject);
  }

  async delete(id: number) {
    this.logger.debug('Calling delete.');
    if (!id) {
      this.logger.debug('test', new Error(`Id not found.`));
      throw new Error(`${__filename} : missing input value id`);
    }
    try {
      const itemToDelete = await this.findById(id);
      const returnValue = await this.repository.delete(itemToDelete);
      return returnValue;
    } catch (e) {
      this.logger.debug('findOne Error', e);
      throw new Error(`${__filename} : ${e}`);
    }
  }
}
