import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ExcluirUsuarioQuery } from '../../dominio/query/excluirUsuario.query';
import { JwtGuard } from '../../../Auth/infra/services/jwt.guard';
import { Usuario } from '../../dominio/models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuarios')
@UseGuards(JwtGuard)
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async cria(@Body() usuario: Usuario): Promise<Usuario> {
    return await this.usuarioService.cria(usuario);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async listar(): Promise<Usuario[]> {
    return await this.usuarioService.listar();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public async atualizar(
    @Param('id') id: number,
    @Body() body,
  ): Promise<Usuario> {
    const usuario = Usuario.factory(id, body.nome, body.email);

    return await this.usuarioService.atualizar(usuario);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async buscar(@Param('id') id: number): Promise<Usuario> {
    return await this.usuarioService.buscar(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  public async excluir(@Param('id') id: number): Promise<ExcluirUsuarioQuery> {
    return await this.usuarioService.excluir(id);
  }
}
