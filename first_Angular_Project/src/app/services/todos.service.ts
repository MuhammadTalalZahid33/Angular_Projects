import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [{
    id: 0,
    title: 'groceries',
    completed: false,
    userId: 1
  },
  {
    id: 1,
    title: 'car wash',
    completed: false,
    userId: 1
  }
  ]
  constructor() { }
}
