import { ID, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType({ description: 'ApplicationString' })
export class ApplicationString {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique Identifier' })
  id: number;

  @Column()
  key: string;

  @Column()
  applicationStringType?: string | null;

  @Column()
  value: string;

  @Column()
  createdDate?: Date | null;

  @Column()
  modifiedDate?: Date | null;
}
