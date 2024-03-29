import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[TODO] Add todo',
  props<{text: string}>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle todo',
  props<{id: number}>()
);

export const editTodo = createAction(
  '[TODO] Edit todo',
  props<{id: number, text: string}>()
);

export const deleteTodo = createAction(
  '[TODO] Delete todo',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All',
  props<{completed: boolean}>()
);

export const deleteCompleted = createAction(
  '[TODO] Delete Completed'
)
