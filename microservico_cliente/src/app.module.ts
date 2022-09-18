import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/core/filter/HttpException.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Cliente } from './Cliente/dominio/models/cliente.model';
import { ClienteModule } from './Cliente/cliente.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    ClienteModule,
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
      entities: [Cliente],
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
