import { Module } from "@nestjs/common";

import { UsersModule } from "./modules/entities/users/users.module";
import { DatabaseModule } from "./shared/database/database.module";
import { AuthModule } from "./modules/features/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./modules/features/auth/auth.guard";

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
