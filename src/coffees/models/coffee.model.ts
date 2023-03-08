import { ID, Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType({ description: 'Coffee' })
export class Coffee {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Unique Identifier' })
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ type: 'json' })
  flavors: string[];
}
