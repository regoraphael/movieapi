import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';

export class MoviesSchema {
  @ApiProperty({
    description: 'Movie name',
    example: 'Titanic',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Movie Description',
    example:
      'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Movie genre',
    example: 'Romance',
  })
  @IsString()
  genre: string;

  @ApiProperty({
    description: 'Movie release date',
    example: '1998-01-10T00:00:00.000Z',
  })
  @IsDateString()
  launch_date: Date;
}
