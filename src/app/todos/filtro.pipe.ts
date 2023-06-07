import { Pipe, PipeTransform, inject } from '@angular/core';
import { Todo } from './models/todo.model';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {
  private store = inject(Store<AppState>);
  transform(todos: Todo[], filtro: string): Todo[] {
    console.log(filtro);
    
    switch (filtro) {
      case 'completed':
        return todos.filter((todo) => todo.completed)
      case 'pendings':
        return todos.filter((todo) => !todo.completed)
    
      default:
        return todos
    }

  }

}
