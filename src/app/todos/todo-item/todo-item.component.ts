import { Component, Input, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  private store = inject(Store<AppState>);
  @Input() public todosItem!: Todo;
  @ViewChild('inputEdit') txtInput!: ElementRef;
  public checkCompleted! : FormControl;
  public textInput! : FormControl;
  public editTodo: boolean = false;
  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todosItem.completed)
    this.textInput = new FormControl(this.todosItem.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({id: this.todosItem.id}))
    })
  }


public editTodos(): void{
  if(this.textInput.invalid) return;
  if(this.textInput.value === this.todosItem.text) return;
  this.store.dispatch(actions.edit({id: this.todosItem.id, text: this.textInput.value}))
  this.editTodo = false;
}
public procedEdit(): void{
  this.editTodo = true;
  setTimeout(() => {
    this.txtInput.nativeElement.select();
  }, 1);
}

public endEdition(): void{
  this.editTodo = false
  this.textInput.setValue(this.todosItem.text)
}

public deleteTodo(): void{
  this.store.dispatch(actions.eliminate({id: this.todosItem.id}))
  
}


}
