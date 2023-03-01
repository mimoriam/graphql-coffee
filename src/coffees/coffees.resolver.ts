import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInput } from '../graphql';

@Resolver('Coffee')
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Query('coffees')
  async coffees() {
    return [];
  }

  @Query('coffee')
  async coffee(@Args('id', ParseIntPipe) id: number) {
    return 'Something';
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return null;
  }
}
