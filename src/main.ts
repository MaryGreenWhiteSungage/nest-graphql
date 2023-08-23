import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/errors/exceptions.filter';
import { SeedService } from './seed/seed.service';

/*
Nest has to bootstrap the application first (instantiating modules and providers, 
  injecting dependencies, etc.) and during this process the instance of WinstonLogger 
  is not yet available, which means that Nest falls back to the internal logger. 
  This solution is to create the logger outside of the application lifecycle, 
  using the createLogger function, and pass it to NestFactory.create. Nest will then 
  wrap our winston logger (the same instance returned by the createLogger method) 
  into the Logger class, forwarding all calls to it: https://www.npmjs.com/package/nest-winston
*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);
  // app.useGlobalFilters(new HttpExceptionFilter(logger));
  const seedService = app.get(SeedService);
  await seedService.seed();
  await app.listen(3001);
}
bootstrap();
