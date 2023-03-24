import { Resolver, Mutation } from '@nestjs/graphql';
import { SeedService } from '../services/seed.service';

@Resolver()
export class SeedResolver {
  constructor(private readonly service: SeedService) {}
  @Mutation(() => Boolean, { name: 'Seed' })
  async findAll() {
    return await this.service.seed();
  }
}
