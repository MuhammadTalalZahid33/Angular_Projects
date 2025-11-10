import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, HighlightCompletedTodoDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  // providers: [TodosService]  // if only need here
})
export class TodosComponent implements OnInit {
  // ******** following is for static data *******
  // todoService = inject(TodosService);
  // todoItems = signal<Array<Todo>>([]);

  // ngOnInit(): void {
  //   console.log(this.todoService.todoItems);
  //   this.todoItems.set(this.todoService.todoItems);
  // } 

  // ******* For Api **********
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(catchError((err) => {
        console.log(err);
        throw(err);
      })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      })
  }

  toggleTodo(id: number) {
    this.todoItems.update((todos) =>
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
}
