import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { MovieModule } from './modules/movies.module';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: path.resolve(__dirname, 'db.sql'),
      synchronize: true,
      entities: ['dist/**/*.model.js'],
    }),
  ],
})
export class AppModule {}
