import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysqlDB',
    port: 3306,
    username: 'root',
    password: 'Misterio0804',
    database: 'test',
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    synchronize: true,
   }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
