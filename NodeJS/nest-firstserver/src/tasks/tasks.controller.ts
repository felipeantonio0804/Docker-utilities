import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
import { TasksService } from './tasks.service'
import { Task } from './interfaces/Task'

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTask(id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<Task>{
        console.log(task.title, task.description, task.done);
        return this.taskService.createTask(task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string): Promise<Task>{
        console.log(`deleting task: ${id}`);
        return this.taskService.deleteTask(id);
    }

    @Put(':id')
    updateTask(@Body() newTask:CreateTaskDto, @Param('id') id): Promise<Task>{
        console.log(`updating task: ${id}`,newTask);
        return this.taskService.updateTask(id,newTask);
    }
}
