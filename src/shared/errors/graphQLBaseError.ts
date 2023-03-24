import { Logger } from 'winston';
import { HttpException, Inject } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { type ErrorCode, type StatusCode } from '../../../shared/errorCode';

export type ExtraInfo = Record<string, any>;

// This file is the implementation of graphql errors for using with Apollo Server (Keystone)

export type CustomExtensions = {
  code: ErrorCode;
  statusCode: StatusCode;
};

type Extensions = CustomExtensions & ExtraInfo;

export class BaseError extends GraphQLError {
  constructor(
    message: string,
    code: ErrorCode,
    statusCode: StatusCode,
    extraInfo: ExtraInfo,
  ) {
    const extensions: Extensions = { ...extraInfo, code, statusCode };
    super(`BaseError: ${message}`, { extensions });
  }
}
