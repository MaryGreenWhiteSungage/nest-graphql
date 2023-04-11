import { CreateApplicationStringInput } from '../../application-strings/dto/create-application-string.input';
export enum ApplicationStrings {
  FUNDING_PORTAL_APPLICATION_NAME = 'FUNDING_PORTAL_APPLICATION_NAME',
  PUBLISH_MESSAGE = 'PUBLISH_MESSAGE',
  PUBLISH_BUTTON = 'PUBLISH_BUTTON',
  NEED_HELP_FOOTER = 'NEED_HELP_FOOTER',
  SUNGAGE_NUMBER = 'SUNGAGE_NUMBER',
  SUNGAGE_EMAIL = 'SUNGAGE_EMAIL',
  PORTAL_SIGN_UP_REQUEST = 'PORTAL_SIGN_UP_REQUEST',
}

export const applicationStrings: CreateApplicationStringInput[] = [
  // Application Strings
  {
    key: ApplicationStrings.FUNDING_PORTAL_APPLICATION_NAME,
    value: '<BANK_NAME> Funding Portal.',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.PUBLISH_MESSAGE,
    value:
      'The Reviewed Items have been Published to Saleforce and are pending final NBT Review steps.',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.PUBLISH_BUTTON,
    value: 'Publish Transactions',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.NEED_HELP_FOOTER,
    value: 'Need Help? Call us Directly',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.SUNGAGE_NUMBER,
    value: '844-SUNGAGE (844-786-4243)',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.SUNGAGE_EMAIL,
    value: 'customerservice@sungagefinancial.com',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
  {
    key: ApplicationStrings.PORTAL_SIGN_UP_REQUEST,
    value: 'Sungage Financial portal Sign Up request',
    applicationStringType: 'type',
    createdDate: new Date(),
    modifiedDate: new Date(),
  },
];
