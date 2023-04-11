import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/international')
  async getInternationalHello(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.HELLO');
  }

  @Get('/dayInt')
  async getDayInterval(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.day_interval');
  }

  @Get('/all')
  async getAll(@I18n() i18n: I18nContext) {
    return await i18n.t('strings');
  }
}
