import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskModel:Model<Task>){
        console.log('TaskModel injected successfully!');
    }

    async getTasks(): Promise<Task[]>{
        return await this.taskModel.find();
    }

    async getTask(id: string): Promise<Task>{
        return this.taskModel.findById(id);
    }

    async createTask(task:CreateTaskDto): Promise<Task>{
        const newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async updateTask(id: string, updatedTask: CreateTaskDto): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(id, updatedTask, { new: true });
    }

    async deleteTask(id: string): Promise<Task> {
        return this.taskModel.findByIdAndDelete(id);
    }
}
