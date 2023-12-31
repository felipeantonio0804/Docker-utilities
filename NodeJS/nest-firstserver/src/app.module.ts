import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TasksModule,MongooseModule.forRoot('mongodb://felipax:Misterio0804@mongoDB:27017/nest-tutorial?authSource=admin')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
