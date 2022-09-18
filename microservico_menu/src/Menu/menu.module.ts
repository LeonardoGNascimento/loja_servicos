import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from './aplicacao/controller/menu.controller';
import { MenuService } from './aplicacao/service/menu.service';
import { Funcionalidade } from './dominio/models/funcionalidade.model';
import { Menu } from './dominio/models/menu.model';
import { MenuRepository } from './infra/repository/mysql/menu.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionalidade, Menu])],
  controllers: [MenuController],
  providers: [MenuRepository, MenuService],
})
export class MenuModule {}
