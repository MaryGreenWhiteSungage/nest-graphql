export enum StatusCode {
  BAD_REQUEST = '400',
  UNAUTHORIZED = '401',
  FORBIDDEN = '403',
  NOT_FOUND = '404',
  CONTENT_TOO_LARGE = '413',
  UNSUPPORTED_MEDIA_TYPE = '415',
  LOCKED = '423',
  INTERNAL_SERVER_ERROR = '500',
  NOT_IMPLEMENTED = '501',
  SERVICE_UNAVAILABLE = '503',
}

/**
 * ValidationCode
 * Errors related to a request that is produced by user input inside a form that the user should see and fix alone.
 * This errors will be filtered in the frontend to show just the message in a user friendly way without the error code
 */
export enum ValidationCode {
  FILESIZE_ABOVE_SYSTEM_LIMIT = '4001',
  INSTALLER_AGREEMENT_ACCOUNT_NUMBER_NOT_VALID = '40010',
  INSTALLER_AGREEMENT_ROUTING_NUMBER_NOT_VALID = '40011',
  INSTALLER_AGREEMENT_BANKING_INFO_REQUIRED = '40012',
  INSTALLER_AGREEMENT_NOTICES_INFO_REQUIRED = '40013',
  INSTALLER_AGREEMENT_NOTICES_ADDRESS_REQUIRED = '40014',
  INSTALLER_AGREEMENT_LEGAL_SIGNER_REQUIRED = '40015',
  KEY_PERSONNEL_UNIQUE_EMAILS_REQUIRED = '40020',
  KEY_PERSONNEL_PROCESS_KEY_PERSONNEL_ERRORS = '40021',
  OWNERSHIP_OWNERS_TOTAL_PERCENTAGE_NOT_VALID = '40030',
  OWNERSHIP_OWNERS_UNIQUE_EMAILS_REQUIRED = '40031',
  STATE_LICENSE_VALIDATION_ERRORS = '40040',
  SUBMIT_APPLICATION_FINAL_AUTHORIZATION_CHECKBOX_REQUIRED = '40050',
  SUBMIT_APPLICATION_FINAL_AUTHORIZATION_NAME_REQUIRED = '40051',
  SUBMIT_APPLICATION_ALL_SECTIONS_NOT_COMPLETE = '40052',
}

/**
 * BadRequestCode
 * Errors related to a request that is probably produced by Frontend logic, that the user should see and report
 */
export enum BadRequestCode {
  APPLICATION_COMPANY_NOT_EXISTS = '400100',
  INSTALLER_APPLICATION_NOT_EXISTS = '400110',
  INSTALLER_APPLICATION_NOT_VALID = '400111',
  INSTALLER_AGREEMENT_AGREEMENT_NOT_VALID = '400120',
  INSTALLER_AGREEMENT_AGREEMENT_NOT_EXISTS = '400121',
  KEY_PERSONNEL_INSTALLER_APPLICATION_OR_APPLICATION_COMPANY_NOT_EXISTS = '400130',
}

/**
 * ForbiddenCode
 * Errors related to a request that is trying to access forbiden content, that the user should see and report
 */
export enum ForbiddenCode {
  LOGIN_FORBIDDEN = '4031',
  LOGOUT_FORBIDDEN = '4032',
  MESSAGING_GET_MESSAGES_FORBIDDEN = '40310',
}

/**
 * NotFoundCode
 * Errors related to a request that is trying to access a resource that doesn't exists. The resource not found has to be related
 * to the main action of the entrypoint. For example in the entrypoints `lockTransaction` and `unlockTransaction` the transaction
 * should exist. But for example if the entrypoint `lockTransaction` for some reason needs to validate that a previous
 * transaction is locked too and the previous transaction doesn't exists. Then it is probably not a NotFound error.
 * The user should see and report this errors.
 */
export enum NotFoundCode {
  TRANSACTION_NOT_FOUND = '4041', // entrypoint `lockTransaction` and `unlockTransaction`
}

/**
 * InternalServerErrorCode
 * Errors related to a request that is produced by the Backend, that the user should see and report
 */
export enum InternalServerErrorCode {
  AUTH0_USER_NOT_CREATED = '5001',
  CLOUD_CONVERT_ERROR_WAITING_JOB_RESULT = '50010',
  DAILY_FUNDING_FETCH_LENDER_INFO_ERROR = '50020',
  FILE_SERVICE_GET_URL_ERROR = '50030',
  FILE_SERVICE_UPLOAD_ERROR = '50031',
  FILE_SERVICE_ATTACHMENT_TYPE_REQUIRED = '50032',
  FILE_SERVICE_FINAL_JOB_STATUS_NOT_VALID = '50033',
  KEY_PERSONNEL_UPSERTED_INSTALLER_APPLICATION_NOT_FOUND = '50040',
  MESSAGING_CREATE_NEW_MESSAGE = '50050',
  MESSAGING_INVALID_PROVIDER = '50051',
  OWNERSHIP_UPDATE_OWNER_ERROR = '50060',
  OWNERSHIP_SET_OWNER_CONFIRMED_ERRORS = '50061',
  STATE_LICENSE_UPDATE_DATA_ERROR = '50070',
}

export type ErrorCode =
  | ValidationCode
  | BadRequestCode
  | ForbiddenCode
  | NotFoundCode
  | InternalServerErrorCode;
