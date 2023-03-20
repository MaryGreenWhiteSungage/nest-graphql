import { SeedService } from './seed.service';
import { Logger } from 'winston';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
  providers: [Logger, SeedService, PrismaService],
})
export class SeederModule {}
