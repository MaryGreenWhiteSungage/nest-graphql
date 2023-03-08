// 📝 CoffeesService - populating our service methods with mock responses
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { Coffee } from './models/coffee.model';

const coffeeList: [Coffee] = [
  { id: 1, name: 'Major Dickerson', brand: 'Peets', flavors: ['bold'] },
];

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly repository: Repository<Coffee>, // 👈👈
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    if (!id) {
      throw new Error(`${__filename} : missing input value id`);
    }
    return await this.repository.findOne({ where: { id } });
  }

  async create(createInput: CreateCoffeeInput) {
    if (!createInput) {
      throw new Error(`${__filename} : missing input value createInput`);
    }
    const newObject = this.repository.create(createInput);
    return await this.repository.save(newObject);
  }
}
