import * as winston from 'winston';
import { format } from 'winston';
/*
const consoleFormatInfoNewPlatform = (info) => {
  const { level, message, location, extensions, ...details } = info;
  const locationStr = location ? `[${location}]` : '';
  const errorCode = extensions?.code ? `[${extensions?.code}]` : '';
  const detailsStr = Object.keys(details).length
    ? `${JSON.stringify(details, null, 2)}`
    : '';

  if (locationStr || errorCode)
    return `${level} - ${errorCode}${locationStr} - ${message} ${detailsStr}`;

  return `${level} - ${message} ${detailsStr}`;
};
*/
const transportValues = {
  console: new winston.transports.Console({
    level: process.env.LOGGER_LEVEL as string | 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.label({ label: 'myTestApplication' }),
      format.colorize({
        all: true,
        colors: {
          info: 'blue',
          debug: 'yellow',
          error: 'red',
        },
      }),
      format.printf((info) => {
        const ext = info.extensions;
        const details = info.details;
        const errorCode = ext?.code ? `[${ext?.code}]` : '';
        const detailsStr =
          details && Object.keys(details).length
            ? `${JSON.stringify(details, null, 2)}`
            : '';

        return `${info.timestamp} [${info.level}] [${info.label}] [${
          info.context ? info.context : info.stack ? info.stack : 'default'
        }] ${info.message}\n\n ${errorCode} : ${detailsStr}`;
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
