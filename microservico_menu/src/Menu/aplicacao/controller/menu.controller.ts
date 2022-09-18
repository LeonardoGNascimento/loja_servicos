import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { JwtGuard } from 'src/Auth/infra/services/jwt.guard';
import { MenuFuncionalidade } from 'src/Menu/dominio/query/menuFuncionalidade.query';
import { MenuService } from '../service/menu.service';
import { Request } from 'express';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  public async menus(@Req() request: Request): Promise<MenuFuncionalidade[]> {
    const funcionalidade = await this.menuService.listarMenus(request.user);

    return funcionalidade;
  }
}
