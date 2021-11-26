import { IsEmail, IsNotEmpty } from 'class-validator';

export class userAuthDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  firstname: string;
  @IsNotEmpty()
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  password: string;
}
