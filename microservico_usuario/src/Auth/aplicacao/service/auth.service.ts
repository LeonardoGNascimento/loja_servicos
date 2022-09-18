import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/Usuario/aplicacao/services/usuario.service';
import { Usuario } from 'src/Usuario/dominio/models/usuario.model';
import { LoginCommand } from 'src/Auth/dominio/command/login.command';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(user: LoginCommand) {
    const usuario = Usuario.factory(null, null, user.email, user.senha);

    const resultado = await this.usuarioService.login(usuario);

    const payload = { email: resultado.email, id: resultado.id };
    return {
      autenticado: true,
      usuario: resultado,
      access_token: this.jwtService.sign(payload),
    };
  }
}
