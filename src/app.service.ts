import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';
// Object {
//       "data": Object {
//       "service": "purchase-api",
//   -     "version": "1.0.0",
//   -   },
//   -   "message": "Hello NestJS",
//   -   "success": true,
//   - }
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS';
  }
}
