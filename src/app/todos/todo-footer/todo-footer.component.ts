import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {
  actualFilter: actions.validFilters = 'all';
  filters: actions.validFilters[] = ['all', 'completed', 'pending'];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('filter').subscribe(filter => {
      this.actualFilter = filter;
    })
  }

  changeFilter(filter: actions.validFilters) {
    this.store.dispatch(actions.setFilter({filter: filter}));
  }
}
