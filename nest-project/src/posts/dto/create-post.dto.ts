import { ApiProperty } from "_@nestjs_swagger@5.1.5@@nestjs/swagger"

export default class CreatePostDto{
    @ApiProperty({description:'帖子详情'})
    title:string
    @ApiProperty({description:'帖子内容'})
    content:string
}