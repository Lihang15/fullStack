import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '_@nestjs_swagger@5.1.5@@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
