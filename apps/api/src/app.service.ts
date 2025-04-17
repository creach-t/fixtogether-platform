import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Welcome to FixTogether API!',
      documentation: '/api/docs',
      version: process.env.npm_package_version || '0.0.1',
    };
  }
}
