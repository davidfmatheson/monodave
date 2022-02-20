import { Controller, Get, Post } from '@nestjs/common';

import { Message, Todo } from '@monodave/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }

  @Post('addTodo')
  addTodo() {
    return this.appService.addTodo();
  }
}
