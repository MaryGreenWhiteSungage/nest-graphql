import { InputType, PartialType } from '@nestjs/graphql';
import { CreateApplicationStringInput } from 'src/dto/create-application-string.input/create-application-string.input';

/* PartialType - Creates class with all members optional. */
@InputType()
export class UpdateApplicationStringInput extends PartialType(
  CreateApplicationStringInput,
) {}
