import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/Cliente/dominio/models/cliente.model';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}

  async listar(): Promise<Cliente[]> {
    const resultado = await this.clienteRepository.find();

    if (resultado.length <= 0) {
      return null;
    }

    return resultado;
  }

  async criar(cliente: Cliente): Promise<Cliente> {
    const resultado = await this.clienteRepository.save(cliente);

    return resultado;
  }

  async buscarPorCpf(cpf: string): Promise<Cliente> {
    const resultado = await this.clienteRepository.findOneBy({ cpf: cpf });

    if (!resultado) {
      return null;
    }

    return resultado;
  }
}
