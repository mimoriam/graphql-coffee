import * as GraphQLTypes from '../../graphql';
import { MinLength } from 'class-validator';

export class CreateCoffeeInputDto extends GraphQLTypes.CreateCoffeeInput {
  @MinLength(3)
  name: string;
}
