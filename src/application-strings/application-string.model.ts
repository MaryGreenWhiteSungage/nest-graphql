import { ID, Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'ApplicationString' })
export class ApplicationString {
  @Field(() => ID, { description: 'Unique Identifier' })
  id: number;

  @Field({ description: 'Key', defaultValue: 'SungageKey' })
  key: string;

  @Field()
  applicationStringType?: string | null;

  @Field()
  value: string;

  @Field()
  createdDate?: Date | null;

  @Field()
  modifiedDate?: Date | null;
}
