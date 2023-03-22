import { Logger, Module } from '@nestjs/common';

import { ApplicationStringService } from 'src/services/application-string.service';
import { ApplicationStringResolver } from 'src/resolvers/application-string.resolver';
import { PrismaService } from '../services/prisma.service';

@Module({
  providers: [
    Logger,
    ApplicationStringResolver,
    ApplicationStringService,
    PrismaService,
  ],
})
export class ApplicationStringModule {}
