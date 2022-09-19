import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionalidade } from 'src/Menu/dominio/models/funcionalidade.model';
import { Menu } from 'src/Menu/dominio/models/menu.model';
import { Permissao } from 'src/Menu/dominio/models/permissao.model';
import { Repository } from 'typeorm';

@Injectable()
export class MenuRepository {
  constructor(
    @InjectRepository(Funcionalidade)
    private funcionalidadeRepository: Repository<Funcionalidade>,
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  async listarMenus(): Promise<Menu[]> {
    const menus = await this.menuRepository.find();

    if (menus.length == 0) {
      return null;
    }

    return menus;
  }

  async buscarFuncionalidade(idFuncionalidade) {
    const funcionalidade = await this.funcionalidadeRepository.find({
      where: { id: idFuncionalidade },
    });
    return funcionalidade;
  }

  async buscarUsuarioAcessoFuncionalidade(idUsuario, idMenu) {
    const usuarioAcesso = await this.menuRepository
      .createQueryBuilder('m')
      .select('f.*')
      .innerJoin(Funcionalidade, 'f', 'f.id_menu = m.id')
      .innerJoin(Permissao, 'p', 'p.id_funcionalidade = f.id')
      .where(`p.id_usuario = ${idUsuario}`)
      .andWhere(`m.id = ${idMenu}`)
      .getRawMany();

    return usuarioAcesso;
  }
}
