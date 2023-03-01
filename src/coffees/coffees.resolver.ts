import { Resolver } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';

@Resolver('Coffee')
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}
}
