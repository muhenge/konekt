import { Posts } from './post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { postDto } from './dto/post.dto';

@EntityRepository(Posts)
export class PostRepository extends Repository<Posts> {
  async createPost(createPostDto: postDto): Promise<Posts> {
    const { title, content } = createPostDto;
    const post = new Posts();
    post.title = title;
    post.content = content;
    await post.save();
    return post;
  }
}
