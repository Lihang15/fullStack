import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypegooseModule.forRoot("mongodb://admin:123456@127.0.0.1:27017/test_mongo"), 
    PostsModule,    
  ],
})
export class AppModule {} 
