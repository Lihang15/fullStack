import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import {Posts} from './posts.model'
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [TypegooseModule.forFeature([Posts])],
  controllers: [PostsController]
})
export class PostsModule {}
