import { StatusCode, type ErrorCode } from '../../../shared/errorCode';
import { BaseError } from './graphQLBaseError';

export type ExtraInfo = Record<string, any>;

// Common errors: this would be Errors that are related directly with a standard http status code

export const BadRequestError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.BAD_REQUEST, extraInfo);

export const UnauthorizedError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.UNAUTHORIZED, extraInfo);

export const ForbiddenError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.FORBIDDEN, extraInfo);

export const NotFoundError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.NOT_FOUND, extraInfo);

export const ContentTooLargeError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.CONTENT_TOO_LARGE, extraInfo);

export const UnsupportedMediaTypeError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.UNSUPPORTED_MEDIA_TYPE, extraInfo);

export const LockedError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.LOCKED, extraInfo);

export const InternalServerError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.INTERNAL_SERVER_ERROR, extraInfo);

export const NotImplementedError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.NOT_IMPLEMENTED, extraInfo);

export const ServiceUnavailableError = (
  message: string,
  code: ErrorCode,
  extraInfo: ExtraInfo = {},
) => new BaseError(message, code, StatusCode.SERVICE_UNAVAILABLE, extraInfo);

// Custom Errors: This would be errors to handle just special cases

/**
 * (KEYSTONE WORKAROUND) This error is modified by Keystone because it's being thrown from inside a keystone custom field.
 * So we have to create a custom error that could be easily filtered and passed in apollo server `formatError`.
 */
/*
export const filesizeAboveSystemLimitErrorMsg = `File is above system size limit of ${getMaxSystemFilesizeInMegaBytes()} MB`;
export const FilesizeAboveSystemLimitError = (automaticLog: boolean = true) =>
  new BaseError(
    filesizeAboveSystemLimitErrorMsg,
    ValidationCode.FILESIZE_ABOVE_SYSTEM_LIMIT,
    StatusCode.BAD_REQUEST,
    {},
    automaticLog,
  );
*/
