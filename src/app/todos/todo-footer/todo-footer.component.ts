import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actionsFilters from '../../filter/filter.actions';
import * as actionsTodos from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  actualFilter: actionsFilters.validFilters = 'all';
  filters: actionsFilters.validFilters[] = ['all', 'completed', 'pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    //* En caso de que sólo necesitasemos emplear uno de los estados
    // this.store.select('filter').subscribe(filter => {
    //   this.actualFilter = filter;
    // })
    this.store.subscribe(state => {
      this.actualFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length;
    })
  }

  changeFilter(filter: actionsFilters.validFilters) {
    this.store.dispatch(actionsFilters.setFilter({filter: filter}));
  }

  deleteCompleted() {
    this.store.dispatch(actionsTodos.deleteCompleted());
  }
}
