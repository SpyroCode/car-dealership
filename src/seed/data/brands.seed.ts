import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: new Date(),
  },
  {
    id: uuid(),
    name: 'Renault',
    createdAt: new Date(),
  },
];
