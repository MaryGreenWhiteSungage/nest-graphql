import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SeedResolver, SeedService, PrismaService],
})
export class SeederModule {}
