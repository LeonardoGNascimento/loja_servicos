import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cliente } from 'src/Cliente/dominio/models/cliente.model';
import { ClienteRepository } from 'src/Cliente/infra/repository/mysql/cliente.repository';

@Injectable()
export class ClienteService {
  constructor(private clienteRepository: ClienteRepository) {}

  async listar(): Promise<Cliente[]> {
    const resultado = await this.clienteRepository.listar();

    if (!resultado) {
      throw new HttpException(
        'Nenhum cliente encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return resultado;
  }

  async criar(cliente: Cliente) {
    const erro = cliente.validarCpf();

    if (erro) {
      throw new HttpException(erro, HttpStatus.BAD_REQUEST);
    }

    const buscarCpf = await this.clienteRepository.buscarPorCpf(cliente.cpf);

    if (buscarCpf) {
      throw new HttpException('CPF já cadastrado', HttpStatus.BAD_REQUEST);
    }

    const resultado = await this.clienteRepository.criar(cliente);

    if (!resultado) {
      throw new HttpException(
        'Não foi possivel cadastrar o cliente',
        HttpStatus.BAD_REQUEST,
      );
    }

    return resultado;
  }
}
