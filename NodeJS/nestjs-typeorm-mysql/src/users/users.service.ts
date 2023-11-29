import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateProfileDTO } from './dto/create-profile.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository:Repository<User>,
        @InjectRepository(Profile) private profileRepository:Repository<Profile>
    ){}

    async getUser(id:number){
        const userFound = await this.userRepository.findOne({
            where:{
                id //id:id
            },
            relations:['posts','profile']
        });

        if(!userFound)
            throw new HttpException('user not founded',HttpStatus.BAD_REQUEST);
        return userFound;
    }

    getUsers(){
        return this.userRepository.find();
    }

    async createUser(createUser:CreateUserDTO){
        const userFound =  await this.userRepository.findOne({
            where:{username:createUser.username}
        });

        if(userFound)
            throw new HttpException('user already exist',HttpStatus.CONFLICT);

        const user = this.userRepository.create(createUser);
        return this.userRepository.save(user);
    }

    async updateUser(id:number,updateUser:UpdateUserDTO){
        const userFound = await this.userRepository.findOne({
            where:{id}
        });

        if(!userFound)
            throw new HttpException('user not found',HttpStatus.NOT_FOUND);

        const updatedUser = Object.assign(userFound,updateUser)
        return this.userRepository.save(updatedUser);
    }

    async deleteUser(id:number){
        const userDeleted =  await this.userRepository.delete({id});
        if(userDeleted.affected === 0)
            throw new HttpException('user not deleted, because not founded',HttpStatus.NOT_FOUND);
        return userDeleted;
    }

    async createProfile(idUser:number, createProfile:CreateProfileDTO){
        const userFound = await this.userRepository.findOne({
            where:{id:idUser}
        });

        if(!userFound)
            throw new HttpException('user not found',HttpStatus.NOT_FOUND);

        const newProfile = this.profileRepository.create(createProfile);
        const savedProfile = await this.profileRepository.save(newProfile);

        if(savedProfile){
            userFound.profile = savedProfile;
            await this.userRepository.save(userFound);
        }

        return savedProfile
    }
}
