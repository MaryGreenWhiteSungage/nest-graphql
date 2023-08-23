import { Logger, Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApplicationStringService } from 'src/application-strings/application-string.service';
import { ApplicationStringResolver } from 'src/application-strings/application-string.resolver';

@Module({
  providers: [
    Logger,
    ApplicationStringResolver,
    ApplicationStringService,
    PrismaService,
  ],
})
export class ApplicationStringModule {}
