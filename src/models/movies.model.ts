import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoviesModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @Column('date')
  launch_date: Date;
}
