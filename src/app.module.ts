import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import { LoggerConfig } from './logger-config/logger-config';
import { AppService } from './app.service';
import { graphQLModule } from './graphql/graphql-config';
import { i18nModule } from './i18n/i18n-config';

import { ApplicationStringModule } from './application-strings/application-string.module';
/* must come last. 
   https://www.tevpro.com/blog/nestjs-resolving-dependency-injection-the-order-matters */
import { AppController } from './app.controller';
import { PrismaService } from './prisma/prisma.service';

import { SeederModule } from './seed/seed.module';

const logger: LoggerConfig = new LoggerConfig();

@Module({
  imports: [
    graphQLModule,
    i18nModule,
    WinstonModule.forRoot(logger.console()),
    SeederModule,
    ApplicationStringModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
