import { Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from 'src/Menu/dominio/models/menu.model';
import { MenuFuncionalidade } from 'src/Menu/dominio/query/menuFuncionalidade.query';
import { MenuRepository } from 'src/Menu/infra/repository/mysql/menu.repository';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}
  async listarMenu(): Promise<Menu[]> {
    const menus = await this.menuRepository.listarMenus();

    if (!menus) {
      throw new NotFoundException('Nenhum menu encontrado');
    }

    return menus;
  }

  async listarMenus(usuario: any): Promise<MenuFuncionalidade[]> {
    const menus = await this.listarMenu();

    if (!menus) {
      return null;
    }

    const menuFuncionalidade = menus.map(
      (item) => new MenuFuncionalidade(item),
    );

    await Promise.all(
      menuFuncionalidade.map(async (item) => {
        const funcionalidade =
          await this.menuRepository.buscarUsuarioAcessoFuncionalidade(
            usuario.id,
            item.menu.id,
          );
        item.setFuncionalidade(funcionalidade);
      }),
    );

    return menuFuncionalidade;
  }
}
