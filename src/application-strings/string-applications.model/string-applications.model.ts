import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'StringApplications' })
export class StringApplications {
  @Field(() => ID, { description: 'Unique Identifier' })
  id: number;

  @Field({ description: 'ApplicationName', defaultValue: 'none' })
  name: string;
}
