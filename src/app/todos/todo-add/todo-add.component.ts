import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required)
  }

  agregar() {

    // en caso de que se aprete el enter sin ningún valor
    if (this.txtInput.invalid) {return;}

    // ejecutamos el action con el argumento del texto del input como valor
    this.store.dispatch(actions.addTodo({text: this.txtInput.value}));

    // limpiamos el input
    this.txtInput.reset();

    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
  }
}
