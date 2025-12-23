import { 
  IsString, 
  IsInt, 
  IsBoolean, 
  IsDateString, 
  IsOptional, 
  ValidateNested, 
  Length,
  Min
} from 'class-validator';
import { Type } from 'class-transformer';

export class MainPopularUseDto {
  @IsBoolean()
  @IsOptional()
  culinary: boolean;

  @IsBoolean()
  @IsOptional()
  medicinal: boolean;

  @IsBoolean()
  @IsOptional()
  aromatic: boolean;
}

export class CreateProductDto {
  @IsString()
  @Length(1, 255)
  commonName: string;

  @IsString()
  @Length(1, 255)
  scientificName: string;

  @IsString()
  genus: string;

  @IsString()
  family: string;

  @IsString()
  growthForm: string;

  @IsString()
  origin: string;

  @IsString()
  provenance: string;

  @IsString()
  collector: string;

  @IsString()
  threatCategory: string;

  @IsBoolean()
  isEndemic: boolean;

  @IsInt()
  @Min(0)
  population: number;

  @IsDateString()
  registrationDate: string;

  @IsDateString()
  deathDate?: string;

  @ValidateNested()
  @Type(() => MainPopularUseDto) // Necesario para que class-transformer sepa a qué clase convertir
  mainPopularUse: MainPopularUseDto;
}