import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userAuthDto } from './auth.credentials.dto';
import { Users } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authCredentialsDto: userAuthDto): Promise<Users> {
    return this.userRepository.signUp(authCredentialsDto);
  }
}
