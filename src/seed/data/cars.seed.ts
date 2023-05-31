import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 2020,
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 2020,
  },
  {
    id: uuid(),
    brand: 'Renault',
    model: 2020,
  },
];
