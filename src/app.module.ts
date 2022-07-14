import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './modules/movies.module';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db.sql',
      synchronize: true,
      entities: ['dist/**/*.model.js'],
    }),
  ],
})
export class AppModule {}
