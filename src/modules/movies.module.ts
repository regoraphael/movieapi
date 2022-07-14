import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from 'src/controllers/movies.controller';
import { MoviesModel } from 'src/models/movies.model';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesModel])],
  controllers: [MoviesController],
})
export class MovieModule {}
