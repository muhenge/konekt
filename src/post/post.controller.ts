import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { postDto } from './dto/post.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';
@Controller('api/v1/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/:id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
    return this.postService.getPost(id);
  }

  @Post()
  createPost(@Body() createPostDto: postDto): Promise<Posts> {
    return this.postService.createPost(createPostDto);
  }
}
