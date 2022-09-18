import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionalidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_funcionalidade: string;

  @Column()
  link: string;

  @Column()
  id_menu: number;
}
