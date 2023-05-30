import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, bran: 'Toyota', model: 2020 },
    { id: 2, bran: 'BMW', model: 2020 },
    { id: 3, bran: 'Tesla', model: 2020 },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    return this.cars.find((car) => car.id === id);
  }
}
