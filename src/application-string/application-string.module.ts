import { Logger, Module } from '@nestjs/common';

import { ApplicationStringService } from './application-string.service';
import { ApplicationStringResolver } from './application-string.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [
    Logger,
    ApplicationStringResolver,
    ApplicationStringService,
    PrismaService,
  ],
})
export class ApplicationStringModule {}
