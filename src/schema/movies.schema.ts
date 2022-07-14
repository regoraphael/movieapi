import { IsDate, IsDateString, IsString } from 'class-validator';

export class MoviesSchema {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  genre: string;
  @IsDateString()
  launch_date: Date;
}
