import { Module } from '@nestjs/common';

import { SeedService } from '../services/seed.service';
import { SeedResolver } from '../resolvers/seed.resolver';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [SeedResolver, SeedService, PrismaService],
})
export class SeederModule {}
