import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, Todo } from '@monodave/api-interfaces';

@Component({
  selector: 'monodave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {
    this.fetch();
  }
  todos: Todo[] = []
  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }
  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
