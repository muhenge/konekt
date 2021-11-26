import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { userAuthDto } from './auth.credentials.dto';
import { AuthService } from './auth.service';
import { Users } from './user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() authCredentialsDto: userAuthDto): Promise<Users> {
    return this.authService.signUp(authCredentialsDto);
  }
}
