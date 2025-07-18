import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { env } from "src/shared/config/env";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: "7d" },
      secret: env.jwtSecret,
      global: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
