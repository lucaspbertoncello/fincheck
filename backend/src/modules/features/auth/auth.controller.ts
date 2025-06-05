import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

import { AuthenticateDto } from "./dto/authenticate.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  authenticate(@Body() authDto: AuthenticateDto) {
    return this.authService.authenticate(authDto);
  }

  @Post("signup")
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }
}
