import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesModel } from 'src/models/movies.model';
import { MoviesSchema } from 'src/schemas/movies.schema';
import { Repository } from 'typeorm';

@ApiTags('movies')
@Controller('/movies')
export class MoviesController {
  constructor(
    @InjectRepository(MoviesModel) private model: Repository<MoviesModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: MoviesSchema,
  ): Promise<{ data: MoviesModel }> {
    const movie = await this.model.save(body);

    return { data: movie };
  }

  @Get()
  public async getAll(): Promise<{ data: MoviesModel[] }> {
    const list = await this.model.find();

    return { data: list };
  }

  @Get(':id')
  public async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: MoviesModel }> {
    const movie = await this.model.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    return { data: movie };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: MoviesSchema,
  ): Promise<{ data: MoviesModel }> {
    const movie = await this.model.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    await this.model.update({ id }, body);

    return { data: await this.model.findOne({ where: { id } }) };
  }

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: string }> {
    const movie = await this.model.findOne({ where: { id } });

    if (!movie) throw new NotFoundException('Movie not found');

    await this.model.delete({ id });

    return { data: `The movie whith id ${id} has been deleted` };
  }
}
