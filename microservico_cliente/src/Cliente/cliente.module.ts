import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './aplicacao/controller/cliente.controller';
import { ClienteService } from './aplicacao/service/cliente.service';
import { Cliente } from './dominio/models/cliente.model';
import { ClienteRepository } from './infra/repository/mysql/cliente.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
})
export class ClienteModule {}
