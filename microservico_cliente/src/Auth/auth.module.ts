import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infra/services/jwt.strategy';
import { JwtConfig } from './infra/services/JwtConfig';

@Module({
  imports: [
    JwtModule.register({
      secret: JwtConfig.SECRET_PASS,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}
