import { Funcionalidade } from '../models/funcionalidade.model';
import { Menu } from '../models/menu.model';

export class MenuFuncionalidade {
  menu: Menu;
  funcionalidade: Funcionalidade[];

  constructor(menu: Menu) {
    this.menu = menu;
  }

  setFuncionalidade(funcionalidade: Funcionalidade[]) {
    this.funcionalidade = funcionalidade;
  }
}
