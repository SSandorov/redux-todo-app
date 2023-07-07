import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[TODO] Add todo',
  props<{text: string}>()
);
