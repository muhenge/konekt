import { IsNotEmpty, Max } from 'class-validator';
export class postDto {
  @IsNotEmpty()
  @Max(50)
  title: string;
  @IsNotEmpty()
  content: string;
}
