import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { PubSubModule } from '../pub-sub/pub-sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor]), PubSubModule],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
