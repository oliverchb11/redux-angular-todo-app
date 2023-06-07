import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit{

  private store = inject(Store<AppState>);
  private _fb = inject(FormBuilder);
  public form!: FormGroup;

  public addTodo({text}: any): void{
    if(this.form.valid){
      this.store.dispatch(actions.create({text}))
      this.form.reset()
    }
  }

  ngOnInit(): void {
    this.formBuilder()
  }

  private formBuilder(): void{
    this.form = this._fb.group({
      text: ['', Validators.required]
    })
  }


}
