import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Funcionalidade } from "src/Menu/dominio/models/funcionalidade.model";
import { Menu } from "src/Menu/dominio/models/menu.model";
import { MenuFuncionalidade } from "src/Menu/dominio/query/menuFuncionalidade.query";
import { Permissao } from "src/Usuario/dominio/models/permissao.model";
import { Repository } from "typeorm";

@Injectable()
export class MenuRepository {

  constructor(
    @InjectRepository(Funcionalidade) private funcionalidadeRepository: Repository<Funcionalidade>,
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
    @InjectRepository(Permissao) private permissaoRepository: Repository<Permissao>
  ) { }

  async listarMenus(): Promise<MenuFuncionalidade[]> {
    const menus = await this.menuRepository.find();


    if (!menus) {
      return null;
    }

    return menus.map(item => new MenuFuncionalidade(item));
  }

  async listarPermissaoUsuario(idUsuario: number) {
    const permissao = this.permissaoRepository.find({where:{
      id_usuario: idUsuario
    }})

    return permissao
  }

  async buscarFuncionalidade(idFuncionalidade) {
    const funcionalidade = await this.funcionalidadeRepository.find({where: {id: idFuncionalidade}})
    return funcionalidade;
  }

  async buscarUsuarioAcessoFuncionalidade(idUsuario, idMenu) {
    const usuarioAcesso = await this.menuRepository.createQueryBuilder('m')
      .select('f.*')
      .innerJoin(Funcionalidade, 'f', 'f.id_menu = m.id')
      .innerJoin(Permissao, 'p', 'p.id_funcionalidade = f.id')
      .where(`p.id_usuario = ${idUsuario}`)
      .andWhere(`m.id = ${idMenu}`).getRawMany()

      return usuarioAcesso;
  }
}
