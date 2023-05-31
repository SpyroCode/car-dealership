import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];
  create(createBrandDto: CreateBrandDto) {
    const brandWithId: Brand = {
      name: createBrandDto.name.toLocaleLowerCase(),
      id: uuid(),
      createdAt: new Date(),
    };
    this.brands.push(brandWithId);
    return brandWithId;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date();
        brandDB = { ...brandDB, ...updateBrandDto, id };
        return brandDB;
      }
    });
    return this.brands.find((brand) => brand.id === id);
  }

  remove(id: string) {
    return this.brands.filter((brand) => brand.id !== id);
  }

  fillBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
