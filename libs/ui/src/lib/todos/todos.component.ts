import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@monodave/api-interfaces';

@Component({
  selector: 'monodave-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor() {
    console.log("Constructing")
  }

  ngOnInit(): void {
    console.log("On init")
  }

}
