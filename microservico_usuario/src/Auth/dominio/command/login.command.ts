import { IsNotEmpty } from 'class-validator';

export class LoginCommand {
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatório' })
  senha: string;
}
