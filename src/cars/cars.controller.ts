import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    try {
      return this.carsService.findAll();
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':id')
  gerCarById(@Param('id', ParseIntPipe) id: number) {
    const car = this.carsService.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }
}
