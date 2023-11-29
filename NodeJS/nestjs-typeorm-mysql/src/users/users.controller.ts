import { Controller, Body ,Post, Get, Param, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './users.entity';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateProfileDTO } from './dto/create-profile.dto';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService) {}

    @Post()
    createUser(@Body() createUser:CreateUserDTO){
        return this.userService.createUser(createUser);
    }

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id',ParseIntPipe) id:number): Promise<User>{
        return this.userService.getUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id',ParseIntPipe) id:number,@Body() updateUser:UpdateUserDTO){
        return this.userService.updateUser(id,updateUser);
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number){
        return this.userService.deleteUser(id);
    }

    @Post(':id/profile')
    createProfile(@Param('id',ParseIntPipe) id:number,@Body() createProfile:CreateProfileDTO){
        return this.userService.createProfile(id,createProfile);
    }
}
