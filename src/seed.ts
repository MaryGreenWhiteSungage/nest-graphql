import { NestFactory } from '@nestjs/core';
import { SeederModule } from './modules/seed.module';

import { SeedService } from './services/seed.service';
import { Logger } from 'winston';
/*
Nest has to bootstrap the application first (instantiating modules and providers, 
  injecting dependencies, etc.) and during this process the instance of WinstonLogger 
  is not yet available, which means that Nest falls back to the internal logger. 
  This solution is to create the logger outside of the application lifecycle, 
  using the createLogger function, and pass it to NestFactory.create. Nest will then 
  wrap our winston logger (the same instance returned by the createLogger method) 
  into the Logger class, forwarding all calls to it: https://www.npmjs.com/package/nest-winston
*/
async function seed() {
  NestFactory.createApplicationContext(SeederModule)
    .then((appContext) => {
      const logger = appContext.get(Logger);
      const seeder = appContext.get(SeedService);
      seeder
        .seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch((error) => {
          logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}

seed();
