import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // todoItems: Array<Todo> = [{
  //   id: 0,
  //   title: 'groceries',
  //   completed: false,
  //   userId: 1
  // },
  // {
  //   id: 1,
  //   title: 'car wash',
  //   completed: false,
  //   userId: 1
  // }
  // ]
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url); 
  }
}
