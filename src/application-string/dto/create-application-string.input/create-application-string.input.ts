import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateApplicationStringInput {
  key: string;
  value: string;
  applicationStringType: string;
}
