import { InputType, PartialType } from '@nestjs/graphql';
import { CreateApplicationStringInput } from './create-application-string.input';

/* PartialType - Creates class with all members optional. */
@InputType()
export class UpdateApplicationStringInput extends PartialType(
  CreateApplicationStringInput,
) {}
