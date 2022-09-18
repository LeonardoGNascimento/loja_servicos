import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/Auth/infra/services/jwt.guard';
import { Cliente } from 'src/Cliente/dominio/models/cliente.model';
import { ClienteService } from '../service/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  async listar() {
    const resultado = await this.clienteService.listar();

    return resultado;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async cadastrar(@Body() cliente: Cliente) {
    const resultado = await this.clienteService.criar(cliente);
    return resultado;
  }
}
