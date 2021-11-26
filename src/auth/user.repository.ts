import { Repository, EntityRepository } from 'typeorm';
import { Users } from './user.entity';
import { userAuthDto } from './auth.credentials.dto';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@EntityRepository(Users)
export class UserRepository extends Repository<Users> {
  async signUp(userDto: userAuthDto): Promise<Users> {
    const { username, firstname, lastname, email, password } = userDto;
    const user = new Users();
    user.username = username;
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    try {
      await user.save();
      return user;
    } catch (error) {
      throw new NotFoundException(`Username or email taken!`);
    }
  }
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
