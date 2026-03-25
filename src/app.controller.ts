import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiResponse } from './interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const result = this.appService.getHello();
    (result).toEqual
    return this.appService.getHello();
  }
}


//Expected: {"data": {"service": "purchase-api", "version": "1.0.0"}, "message": "Hello NestJS", "success": true}
