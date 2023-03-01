import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
