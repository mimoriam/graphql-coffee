import { Injectable } from '@nestjs/common';
import * as GraphQLTypes from '../graphql';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputError } from 'apollo-server-express';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeesRepository.find();
  }

  async findOne(id: number) {
    const coffee = await this.coffeesRepository.findOne({ where: { id } });

    if (!coffee) {
      throw new UserInputError(`Coffee ${id} not found`);
    }

    return coffee;
  }

  async create(createCoffeeInput: GraphQLTypes.CreateCoffeeInput) {
    const coffee = await this.coffeesRepository.create(createCoffeeInput);

    return this.coffeesRepository.save(coffee);
  }

  async update(id: number, updateCoffeeInput: GraphQLTypes.UpdateCoffeeInput) {
    const coffee = await this.coffeesRepository.preload({
      id,
      ...updateCoffeeInput,
    });

    if (!coffee) {
      throw new UserInputError(`Coffee ${id} not found`);
    }

    return this.coffeesRepository.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.findOne(id);
    return this.coffeesRepository.remove(coffee);
  }
}
