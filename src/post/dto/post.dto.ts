import { IsNotEmpty, Min } from 'class-validator';
export class postDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
}
