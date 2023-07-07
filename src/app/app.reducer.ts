import { Todo } from "./todos/models/todo.model";

//* Con esta interfaz manejamos el estado global de la aplicación.
//* Si la aplicación tuviese más estados a parte del Todo lo pondríamos como propiedad de la
//* interfaz
export interface AppState {
  todos: Todo[];
}
