import { Body, Controller, Post } from '@nestjs/common';
import { userAuthDto } from './auth.credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() authCredentialsDto: userAuthDto): Promise<User> {
    return this.authService.signUp(authCredentialsDto);
  }
}
