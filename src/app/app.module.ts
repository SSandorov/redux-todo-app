import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosModule } from './todos/todos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

//* ngRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    StoreModule.forRoot({todos: todoReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
