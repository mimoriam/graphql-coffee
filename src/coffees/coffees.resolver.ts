import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { CoffeesService } from './coffees.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInputDto } from './dtos/create-coffee.input.dto';
import { UpdateCoffeeInputDto } from './dtos/update-coffee.input.dto';
import { PubSub } from 'graphql-subscriptions';

@Resolver('Coffee')
export class CoffeesResolver {
  constructor(
    private readonly coffeesService: CoffeesService,
    private readonly pubSub: PubSub,
  ) {}

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
    createCoffeeInput: CreateCoffeeInputDto,
  ) {
    return await this.coffeesService.create(createCoffeeInput);
  }

  @Mutation('updateCoffee')
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput')
    updateCoffeeInput: UpdateCoffeeInputDto,
  ) {
    return await this.coffeesService.update(id, updateCoffeeInput);
  }

  @Mutation('removeCoffee')
  async remove(@Args('id', ParseIntPipe) id: number) {
    return await this.coffeesService.remove(id);
  }

  @Subscription()
  coffeeAdded() {
    return this.pubSub.asyncIterator('coffeeAdded');
  }
}
