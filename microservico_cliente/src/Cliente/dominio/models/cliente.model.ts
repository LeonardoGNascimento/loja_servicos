import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'nome é obrigatório' })
  @IsString({ message: 'nome deve ser do tipo texto' })
  nome: string;

  @Column()
  @IsNotEmpty({ message: 'cpf é obrigatório' })
  @IsString({ message: 'cpf deve ser do tipo texto' })
  cpf: string;

  @Column()
  @IsNotEmpty({ message: 'CEP é obrigatório' })
  @IsString({ message: 'CEP deve ser do tipo texto' })
  cep: string;

  @Column()
  @IsNotEmpty({ message: 'Logradouro é obrigatório' })
  @IsString({ message: 'Logradouro deve ser do tipo texto' })
  logradouro: string;

  @Column()
  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  @IsString({ message: 'Cidade deve ser do tipo texto' })
  cidade: string;

  @Column()
  @IsNotEmpty({ message: 'Número é obrigatório' })
  @IsString({ message: 'Número deve ser do tipo texto' })
  numero: string;

  public validarCpf() {
    this.cpf = this.cpf.replace(/[^\w\s]/gi, '');
    this.cpf = this.cpf.replace(/[A-Za-z]/g, '');

    if (this.cpf.length > 11 || this.cpf.length < 11) {
      return 'CPF deve ter 11 caracteres';
    }

    return null;
  }
}
