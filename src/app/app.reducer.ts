import { ActionReducerMap } from "@ngrx/store";
import { filtersValid } from "./filter/filtro.actions";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filtro.reducer";

export interface AppState{
    todos: Todo[],
    filters: string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filters: filterReducer
}