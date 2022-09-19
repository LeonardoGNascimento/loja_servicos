import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/Auth/infra/services/jwt.guard';
import { MenuService } from '../service/menu.service';
import { Menu } from 'src/Menu/dominio/models/menu.model';
import { Request } from 'express';
import { MenuFuncionalidade } from 'src/Menu/dominio/query/menuFuncionalidade.query';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async listarMenu(@Req() request: Request): Promise<Menu[]> {
    const funcionalidade = await this.menuService.listarMenu();

    return funcionalidade;
  }

  @Get('permissoes')
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async listarPermissoesUsuario(
    @Req() request: Request,
  ): Promise<MenuFuncionalidade[]> {
    const funcionalidade = await this.menuService.listarMenus(request.user);

    return funcionalidade;
  }
}
