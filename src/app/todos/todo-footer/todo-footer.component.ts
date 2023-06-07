import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions  from '../../filter/filtro.actions';




@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{
  public taskPending: number = 0;
  public typeFilter!: actions.filtersValid;
  public filters: actions.filtersValid[] = ['all', 'completed', 'pendings']
  private store = inject(Store<AppState>);
  public selected: boolean = false;
  
  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.typeFilter = state.filters
      this.taskPending = state.todos.filter((to: any) => !to.completed).length;
    })

    
  }

  public filterData(filter: actions.filtersValid): void{
    this.store.dispatch(actions.setFilter({filter: filter}))
  }


}
