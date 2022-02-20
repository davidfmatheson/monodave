import { Injectable } from '@nestjs/common';
import { Message, Todo } from '@monodave/api-interfaces';

@Injectable()
export class AppService {
  todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}];

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    })
  }
}
