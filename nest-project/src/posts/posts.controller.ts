import { Controller, Get, Post,Body,Put,Param,Delete } from '@nestjs/common';
import { get } from 'http';
import { ApiOperation, ApiResponse, ApiTags } from '_@nestjs_swagger@5.1.5@@nestjs/swagger';
import CreatePostDto from './dto/create-post.dto'
import {Posts} from './posts.model'
import { InjectModel } from "nestjs-typegoose";
import { ReturnModelType } from "@typegoose/typegoose";

@Controller('posts')
@ApiTags("posts帖子")
export class PostsController {
    constructor(
        @InjectModel(Posts) private readonly postsModel: ReturnModelType<typeof Posts>
      ) {}
    @Get()
    @ApiOperation({ summary: '显示博客列表' })
    async index(){
        console.log("123456",this.postsModel.find())
        return await this.postsModel.find().exec();
        
    }
    
    @Post()
    @ApiOperation({ summary: '创建帖子' })
    create(@Body() body:CreatePostDto){
        return {success:true}
    }
    
    @Get(":id")
    @ApiOperation({ summary: '获取指定帖子' })
    detail(){
        return{
            id:1,
            title:"标题一"
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '编辑帖子' })
    update(@Param('id') id:string,@Body() body:CreatePostDto){
        return {
            success:true
        }
    }
    @Delete(':id')
    @ApiOperation({ summary: '删除帖子' })
    delete(@Param('id') id:string,@Body() body:CreatePostDto){
        return {
            success:true
        }
    }
}
