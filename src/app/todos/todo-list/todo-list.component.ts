import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{


  private store = inject(Store<AppState>);
  public todosItem: Todo[] = [];
  public filter!: string;

  ngOnInit(): void {
    this.store.subscribe(({todos, filters}) => {
      this.todosItem = todos;
      this.filter = filters;
    })
  }
}
