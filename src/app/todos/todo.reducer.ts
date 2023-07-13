import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('TODO 1'),
  new Todo('TODO 2'),
  new Todo('TODO 3'),
  new Todo('TODO 4'),
];

export const todoReducer = createReducer(
  initialState,
  //! Hay que evitar mutar el estado, por lo que no podemos emplear el push()
  on(actions.addTodo, (state, {text}) => [...state, new Todo(text)]),

);
