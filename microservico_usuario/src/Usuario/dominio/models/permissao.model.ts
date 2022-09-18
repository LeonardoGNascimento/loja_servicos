import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permissao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_usuario: number;

  @Column()
  id_funcionalidade: number;
}
