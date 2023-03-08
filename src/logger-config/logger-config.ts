import * as winston from 'winston';
import { format } from 'winston';

const transportValues = {
  console: new winston.transports.Console({
    level: 'silly',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.label({ label: 'myTestApplication' }),
      format.colorize({
        colors: {
          info: 'blue',
          debug: 'yellow',
          error: 'red',
        },
      }),
      format.printf((info) => {
        return `${info.timestamp} [${info.level}] [${info.label}] [${
          info.context ? info.context : info.stack ? info.stack : 'default'
        }] ${info.message}`;
      }),
      format.align(),
    ),
  }),
};
/*
    winston.format.label({label: 'mymodule'}),
    winston.format.printf(({label, message}) => {
      */
export const options = {
  exitOnError: false,
  format: format.combine(
    format.label({ label: 'myTestApplication' }),
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    format.printf((msg) => {
      return `${msg.timestamp} [${msg.level}] [${msg.label}] - ${msg.message}`;
    }),
  ),
  transports: [transportValues.console],
};

export class LoggerConfig {
  // private readonly options: winston.LoggerOptions;
  private readonly options: winston.LoggerOptions;
  constructor() {
    this.options = options;
  }

  public console(): object {
    return this.options;
  }
}
