import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateApplicationStringInput {
  key: string;
  value: string;
  applicationStringType: string;
  modifiedDate?: Date;
  createdDate?: Date;
}
