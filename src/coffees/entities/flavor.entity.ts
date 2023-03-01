import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as GraphQLTypes from '../../graphql';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor implements GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
