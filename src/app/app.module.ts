import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//import material module
import { MaterialModule } from './component/material/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialComponent } from './component/material/material.component';
import { DarkthemeComponent } from './component/darktheme/darktheme.component';
import { HomeComponent } from './component/home/home.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { ObservableComponent } from './component/observable/observable.component';
import { AddComponent } from './component/CRUD/add/add.component';
import { EditComponent } from './component/CRUD/edit/edit.component';
import { ListComponent } from './component/CRUD/list/list.component';
import { TodoMainComponent } from './component/CRUD/todo-main/todo-main.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    DarkthemeComponent,
    HomeComponent,
    TodosComponent,
    TodoItemComponent,
    NotfoundComponent,
    AddTodoComponent,
    ObservableComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    TodoMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // toaster added
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
