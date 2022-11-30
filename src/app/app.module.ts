import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import toasetr moduel
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MaterialComponent } from './component/material/material.component';
import { DarkthemeComponent } from './component/darktheme/darktheme.component';
import { HomeComponent } from './component/home/home.component';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ToastrModule.forRoot(), // toaster added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
