import { createReducer, on } from '@ngrx/store';
import { create, edit, eliminate, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Aprender Docker')
];


 const _todoReducer = createReducer(
    initialState,
    on(create, (state, {text}) => [...state, new Todo(text)]),
    on(edit, (state, {id, text}) => {
        return state.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    text: text
                }
            }
            return todo;
        })
    }),
    on(toggle, (state, {id}) => {
        return state.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
    }),
    on(eliminate, (state, {id}) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, {completed}) => {
        return state.map((todo) => {
            return {
                ...todo,
                completed: completed
            }
        })
    })
)


export function todoReducer(state: any, action: any){
    return _todoReducer(state, action)
}