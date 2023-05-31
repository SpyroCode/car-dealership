import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  create(createCar: CreateCarDto) {
    const validateCar = this.cars.find(
      (car) => car.brand === createCar.brand && car.model === createCar.model,
    );
    if (validateCar) {
      throw new NotFoundException(`Car exists`);
    }
    const carWithId: Car = { ...createCar, id: uuid() };
    this.cars.push(carWithId);
    return carWithId;
  }

  fillCars(cars: Car[]) {
    this.cars = cars;
  }
}
