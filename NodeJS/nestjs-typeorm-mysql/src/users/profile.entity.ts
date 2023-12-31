import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity('user_profile')
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    firstname:string;

    @Column()
    lastname: string;

    @Column({nullable:true})
    age:number;
}