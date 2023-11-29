import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dto/create-post.dto'

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postsRepository:Repository<Post>,
        private usersService:UsersService,
    ){}


    async createPost(post:CreatePostDTO){
        const userFound = await this.usersService.getUser(post.authorId);
        if(userFound){
            const newPost = this.postsRepository.create(post);
            return this.postsRepository.save(newPost);
        }
    }

    getPosts(){
        return this.postsRepository.find({
            relations:['author']
        });
    }
}
