import { IsInt, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsInt()
  readonly model: number;
}
