import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WinstonModule } from 'nest-winston';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

import * as path from 'path';
import { join } from 'path';
import { LoggerConfig } from './logger-config/logger-config';
import { AppService } from './services/app.service';

import { ApplicationStringModule } from './modules/application-string.module';
/* must come last. 
   https://www.tevpro.com/blog/nestjs-resolving-dependency-injection-the-order-matters */
import { AppController } from './controllers/app.controller';
import { PrismaService } from './services/prisma.service';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { upperDirectiveTransformer } from './common/upper-case.directive';
import { SeederModule } from './modules/seed.module';

const logger: LoggerConfig = new LoggerConfig();

const graphQLModule = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
  installSubscriptionHandlers: true,
  buildSchemaOptions: {
    directives: [
      new GraphQLDirective({
        name: 'upper',
        locations: [DirectiveLocation.FIELD_DEFINITION],
      }),
    ],
  },
});

@Module({
  imports: [
    graphQLModule,
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
    SeederModule,
    ApplicationStringModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
