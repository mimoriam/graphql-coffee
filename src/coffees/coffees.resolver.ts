import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { ParseIntPipe } from '@nestjs/common';
import * as GraphQLTypes from '../graphql';

@Resolver('Coffee')
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Query('coffees')
  async coffees() {
    return await this.coffeesService.findAll();
  }

  @Query('coffee')
  async coffee(@Args('id', ParseIntPipe) id: number) {
    return await this.coffeesService.findOne(id);
  }

  @Mutation('createCoffee')
  async create(
    @Args('createCoffeeInput')
    createCoffeeInput: GraphQLTypes.CreateCoffeeInput,
  ) {
    return await this.coffeesService.create(createCoffeeInput);
  }

  @Mutation('updateCoffee')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput')
    updateCoffeeInput: GraphQLTypes.UpdateCoffeeInput,
  ) {
    return await this.coffeesService.update(id, updateCoffeeInput);
  }

  @Mutation('removeCoffee')
  async remove(@Args('id', ParseIntPipe) id: number) {
    return await this.coffeesService.remove(id);
  }
}
