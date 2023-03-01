import * as GraphQLTypes from '../../graphql';
import { IsOptional, MinLength } from 'class-validator';

export class UpdateCoffeeInputDto extends GraphQLTypes.UpdateCoffeeInput {
  @IsOptional()
  @MinLength(3)
  name: string;
}
