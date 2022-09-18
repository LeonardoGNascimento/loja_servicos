import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './aplicacao/controllers/usuario.controller';
import { UsuarioService } from './aplicacao/services/usuario.service';
import { Permissao } from './dominio/models/permissao.model';
import { Usuario } from './dominio/models/usuario.model';
import { UsuarioRepository } from './infra/repository/mysql/usuario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Permissao])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository],
  exports: [UsuarioService, UsuarioRepository],
})
export class UsuarioModule {}
