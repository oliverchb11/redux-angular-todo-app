import { createReducer, on } from '@ngrx/store';
import { filtersValid, setFilter } from './filtro.actions';


export const initialState: string = 'all';

 const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => filter),

);

export function filterReducer(state: any, action: any){
    return _filterReducer(state, action)
}