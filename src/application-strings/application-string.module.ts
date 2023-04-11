import { Logger, Module } from '@nestjs/common';

import { ApplicationStringService } from 'src/application-strings/application-string.service';
import { ApplicationStringResolver } from 'src/application-strings/application-string.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [
    Logger,
    ApplicationStringResolver,
    ApplicationStringService,
    PrismaService,
  ],
})
export class ApplicationStringModule {}
