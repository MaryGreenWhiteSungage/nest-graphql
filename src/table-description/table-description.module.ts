import { Logger, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TableDescriptionService } from './table-description.service';
import { FileService } from './file.service';

@Module({
  providers: [TableDescriptionService, PrismaService, FileService],
})
export class TableDescriptionModule {}
