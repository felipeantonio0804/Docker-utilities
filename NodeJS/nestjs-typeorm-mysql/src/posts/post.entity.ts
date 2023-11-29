import {Entity,PrimaryGeneratedColumn,Column, ManyToOne} from 'typeorm';
import {User} from 'src/users/users.entity';

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    authorId:number;//Por si solo quiero colocar el id

    @ManyToOne(() => User,user=> user.posts)//segundo se especifica la forma de relacionarse
    author: User
}