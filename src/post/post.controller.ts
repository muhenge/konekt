import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { postDto } from './dto/post.dto';
import { Posts } from './post.entity';
import { PostService } from './post.service';
@Controller('api/v1/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPosts(): Promise<Posts[]> {
    return this.postService.getPosts();
  }

  @Get('/:id')
  getPost(@Param('id', ParseIntPipe) id: number): Promise<Posts> {
    return this.postService.getPost(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: postDto): Promise<Posts> {
    return this.postService.createPost(createPostDto);
  }

  @Delete('/:id')
  deletPost(@Param('id') id: number): Promise<void> {
    return this.postService.deletePost(id);
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  updatePost(id: number, @Body() createPostDto: postDto): Promise<Posts> {
    return this.postService.updatePost(id, createPostDto);
  }
}
