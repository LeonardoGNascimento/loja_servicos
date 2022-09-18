import { Injectable } from '@nestjs/common';
import { MenuFuncionalidade } from 'src/Menu/dominio/query/menuFuncionalidade.query';
import { MenuRepository } from 'src/Menu/infra/repository/mysql/menu.repository';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async listarMenus(usuario: any): Promise<MenuFuncionalidade[]> {
    const menuFuncionalidade = await this.menuRepository.listarMenus();

    if (!menuFuncionalidade) {
      return null;
    }

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
