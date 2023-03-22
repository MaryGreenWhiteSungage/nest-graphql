import { ParseIntPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UpdateApplicationStringInput } from 'src/dto/update-application-string.input/update-application-string.input';
import { ApplicationStringService } from 'src/services/application-string.service';
import { CreateApplicationStringInput } from 'src/dto/create-application-string.input/create-application-string.input';
import { ApplicationString } from 'src/models/application-string.model/application-string.model';

@Resolver()
export class ApplicationStringResolver {
  constructor(private readonly service: ApplicationStringService) {}
  @Query(() => [ApplicationString], { name: 'ApplicationString' })
  async findAll() {
    return this.service.findMany({});
  }

  @Query(() => ApplicationString, { name: 'ApplicationStringFindOne' })
  async findOne(@Args('key') key: string) {
    return this.service.findOne(key);
  }

  @Mutation(() => ApplicationString, { name: 'CreateApplicationString' })
  async create(
    @Args('ApplicationStringCreateInput')
    applicationStringCreateInput: CreateApplicationStringInput,
  ) {
    return this.service.create(applicationStringCreateInput);
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
