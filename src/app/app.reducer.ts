import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { validFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";

//* Con esta interfaz manejamos el estado global de la aplicación.
//* Si la aplicación tuviese más estados a parte del Todo lo pondríamos como propiedad de la
//* interfaz
export interface AppState {
  todos: Todo[];
  filter: validFilters;
}

//* En el app module definimos el store module con la ruta al app state, pero no podemos definir varios estados
//* manualmente, sino que debemos crear un objeto que lo maneje
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
