import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WinstonModule } from 'nest-winston';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as path from 'path';
import { join } from 'path';
import { LoggerConfig } from './logger-config/logger-config';
import { AppService } from './app.service';

import { CoffeesModule } from './coffees/coffees.module';
import { ApplicationStringModule } from './application-string/application-string.module';
/* must come last. 
   https://www.tevpro.com/blog/nestjs-resolving-dependency-injection-the-order-matters */
import { AppController } from './app.controller';

const logger: LoggerConfig = new LoggerConfig();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    WinstonModule.forRoot(logger.console()),
    //  CoffeesModule,
    ApplicationStringModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
