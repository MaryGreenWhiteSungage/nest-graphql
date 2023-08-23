import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'winston';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (status >= 500) {
      this.logger.error({ request, response });
    }

    this.logger.error(`Exception Filter called!`);
    response.status(status).json({
      message: exception.getResponse().toString(),
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
