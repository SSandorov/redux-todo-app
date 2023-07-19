import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filter/filter.actions';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];
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

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({filter: filter}));
  }
}
