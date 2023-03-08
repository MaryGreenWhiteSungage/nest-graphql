import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, ID, Mutation } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';

// Mutation within our Resolver
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { Coffee } from './models/coffee.model';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}
  /* Method will be 'coffees' */
  @Query(() => [Coffee], { name: 'coffees' })
  async coffees() {
    return this.coffeesService.findAll();
  }
  /* Method will be 'coffees' */
  @Query(() => [Coffee], { name: 'findOneCoffee' })
  async findOneCoffee(
    @Args('id', { type: () => ID }, ParseIntPipe)
    id: number,
  ) {
    return this.coffeesService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee', nullable: true })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeesService.create(createCoffeeInput);
  }
}
