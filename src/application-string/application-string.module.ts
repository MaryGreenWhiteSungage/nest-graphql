import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplicationStringService } from './application-string.service';
import { ApplicationString } from './models/application-string.model/application-string.model';
import { ApplicationStringResolver } from './application-string.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationString])],
  providers: [Logger, ApplicationStringResolver, ApplicationStringService],
})
export class ApplicationStringModule {}
