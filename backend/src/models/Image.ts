<<<<<<< HEAD
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
=======
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
<<<<<<< HEAD
   @PrimaryGeneratedColumn('increment')
   id: number;

   @Column()
   path: string;

   @ManyToOne(() => Orphanage, orphanage => orphanage.images )
   @JoinColumn({ name: 'orphanage_id' })
   orphanage: Orphanage;
}
=======
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
