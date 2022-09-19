import { MenuModule } from './Menu/menu.module';
import { AuthModule } from './Auth/auth.module';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/core/filter/HttpException.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Funcionalidade } from './Menu/dominio/models/funcionalidade.model';
import { Menu } from './Menu/dominio/models/menu.model';
import { Permissao } from './Menu/dominio/models/permissao.model';

@Module({
  imports: [
    MenuModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      database: `${process.env.DATABASE}`,
      type: 'mysql',
      synchronize: true,
      username: `${process.env.DATABASE_USER}`,
      password: `${process.env.DATABASE_PASSWORD}`,
      entities: [Funcionalidade, Menu, Permissao],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
