<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
=======
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
<<<<<<< HEAD
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   name: string;

   @Column()
   latitude: number;

   @Column()
   longitude: number;

   @Column()
   about: string;

   @Column()
   instructions: string;

   @Column()
   opening_hours: string;

   @Column()
   open_on_weekends: boolean;

   @OneToMany(() => Image, image => image.orphanage, {
      cascade: ['insert', 'update']
   })
   @JoinColumn({ name: 'orphanage_id' })
   images: Image[];
}
=======
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
