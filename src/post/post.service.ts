import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { postDto } from './dto/post.dto';
import { Posts } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  async getPosts(): Promise<Posts[]> {
    return this.postRepository.find();
  }

  async getPost(id: number): Promise<Posts> {
    const post = await this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundException(`Post with id "${id}" not found`);
    }
    return post;
  }

  async createPost(createPostDto: postDto): Promise<Posts> {
    return this.postRepository.createPost(createPostDto);
  }

  async deletePost(id: number): Promise<void> {
    await this.getPost(id);
    await this.postRepository.delete(id);
  }

  async updatePost(id: number, createPostDto: postDto): Promise<Posts> {
    const post = await this.getPost(id);
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    await post.save();
    return post;
  }
}
