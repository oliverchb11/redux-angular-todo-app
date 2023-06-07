import { createAction, props } from '@ngrx/store';

export type filtersValid = 'all' | 'completed' | 'pendings'

export const setFilter = createAction('[Filtro] Set Filter', props<{filter: string}>());
