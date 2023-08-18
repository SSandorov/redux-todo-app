import {createReducer, on} from '@ngrx/store';
import * as actions from './filter.actions';

export const initialState: actions.validFilters = 'all';

//! Como el createReducer no nos recoge el tipado de validFilters, sólo nos coge el string
//! que definimos, debemos asignarle el tipo al createReducer
export const filterReducer = createReducer<actions.validFilters>(
  initialState,

  on(actions.setFilter, (state, {filter}) => filter),
);
