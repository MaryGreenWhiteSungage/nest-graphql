import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ApplicationStringService } from './application-string.service';
import { CreateApplicationStringInput } from './dto/create-application-string.input/create-application-string.input';
import { UpdateApplicationStringInput } from 'src/coffees/dto/update-application-string.input/update-application-string.input';
import { ApplicationString } from './models/application-string.model/application-string.model';

@Resolver()
export class ApplicationStringResolver {
  constructor(private readonly service: ApplicationStringService) {}
  @Query(() => [ApplicationString], { name: 'ApplicationString' })
  async findAll() {
    return this.service.findAll();
  }

  @Query(() => ApplicationString, { name: 'ApplicationStringFindOne' })
  async findOne(@Args('key') key: string) {
    return this.service.findOne(key);
  }

  @Mutation(() => ApplicationString, { name: 'CreateApplicationString' })
  async create(
    @Args('createApplicationStringInput')
    createApplicationStringInput: CreateApplicationStringInput,
  ) {
    return this.service.create(createApplicationStringInput);
  }

  @Mutation(() => ApplicationString, { name: 'UpdateApplicationString' })
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateApplicationStringInput')
    updateApplicationStringInput: UpdateApplicationStringInput,
  ) {
    return this.service.update(id, updateApplicationStringInput);
  }

  @Mutation(() => ApplicationString, { name: 'ApplicationStringDelete' })
  async delete(@Args('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}