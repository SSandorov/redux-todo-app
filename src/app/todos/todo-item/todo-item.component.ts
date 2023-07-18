import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: Todo;
  @ViewChild('inputF') txtInputF!: ElementRef;

  checkCompleted!: FormControl;
  textInput!: FormControl;
  edit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {

    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(val => {
      this.store.dispatch(actions.toggleTodo({id: this.todo.id}));
    });

    //! No funciona hoy en día, hay que cambiar el modelo de la clase Todo
    //! esto ocurre porque NgRx se ha vuelto más estricto y no permite mutar los
    //! valores sino es a través del reducer o los actions
    // this.todo.completed = true;
  }

  editing() {
    this.edit = true;

    //* cuando borramos el texto del input y salimos, la siguiente vez que clicamos el input
    //* no hay texto presente, así que lo podemos arreglar de la siguiente manera
    this.textInput.setValue(this.todo.text);

    // Se ejecuta tan rápido que debemos añadirle un delay
    setTimeout(() => {
      this.txtInputF.nativeElement.select();
    }, 1);


  }

  finishEdit() {
    this.edit = false;

    // si el campo no tiene ningún valor, no tiene que devolver nada
    if (this.textInput.invalid) {return;}
    // si el texto del campo es el mismo que el todo, no tiene que devolver nada
    if (this.textInput.value === this.todo.text) {return;}

    this.store.dispatch(actions.editTodo({
      id: this.todo.id,
      text: this.textInput.value
    }));
  }

  delete() {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }
}
