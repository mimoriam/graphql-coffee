import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesResolver } from './coffees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  providers: [CoffeesResolver, CoffeesService],
})
export class CoffeesModule {}
