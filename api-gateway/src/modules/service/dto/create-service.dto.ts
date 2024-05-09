import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  parkId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: Date,
    example: '2024-06-05',
  })
  @IsDateString()
  @IsNotEmpty()
  startedAt: number;

  @ApiProperty({
    type: Date,
    example: '2024-06-05',
  })
  @IsDateString()
  @IsNotEmpty()
  endedAt: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsOptional()
  price: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsOptional()
  tariffId: number;
}
