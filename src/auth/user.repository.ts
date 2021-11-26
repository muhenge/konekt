import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { userAuthDto } from './auth.credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(userDto: userAuthDto): Promise<User> {
    const { username, firstname, lastname, email, password } = userDto;
    const user = new User();
    user.username = username;
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
  }
}
