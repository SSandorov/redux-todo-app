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
  on(actions.toggleTodo, (state, {id}) => {
    //* el método map() crea un nuevo arreglo, por lo que no estamos modificando el estado
    return state.map(todo => {
      //* devolvemos un nuevo objeto para no mutar el todo del estado actual
      if (todo.id === id) {
        return {
          //* el operador spread en este caso nos mantiene el valor actual de las propiedades del
          //* objeto, y sólo cambiamos aquellas propiedades que queramos
          ...todo, // trae todas las propiedades del todo del estado actual
          completed: !todo.completed
        }
      }  else {
        return todo;
      }
      //* Tenemos que tener cuidado de no mutar nuestro objeto todo, por lo que no podemos hacerlo así
      // / todo.completed = !todo.completed;
    });
  }),
  on(actions.editTodo, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, // trae todas las propiedades del todo del estado actual
          text: text
        }
      }  else {
        return todo;
      }
    });
  }),
  //* el método filter de los arreglos nos devuelve un nuevo arreglo, por lo que podemos emplearlo
  //* para encontrar un valor dentro de un arreglo
  on(actions.deleteTodo, (state, {id}) =>  state.filter(todo => todo.id !== id)),
);
