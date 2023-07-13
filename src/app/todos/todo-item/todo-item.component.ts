import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  ngOnInit() {

    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);


    //! No funciona hoy en día, hay que cambiar el modelo de la clase Todo
    //! esto ocurre porque NgRx se ha vuelto más estricto y no permite mutar los
    //! valores sino es a través del reducer o los actions
    // this.todo.completed = true;
  }

  editing() {
    this.edit = true;

    // Se ejecuta tan rápido que debemos añadirle un delay
    setTimeout(() => {
      this.txtInputF.nativeElement.select();
    }, 1);


  }

  finishEdit() {
    this.edit = false;
  }
}
