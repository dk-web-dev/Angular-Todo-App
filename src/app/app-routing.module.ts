import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialComponent } from './component/material/material.component';
import { HomeComponent } from './component/home/home.component';
import { TodosComponent } from './component/todos/todos.component';
import { ObservableComponent } from './component/observable/observable.component';
import { TodoMainComponent } from './component/CRUD/todo-main/todo-main.component';
import { EditComponent } from './component/CRUD/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'todos', component: TodosComponent },
  {path:'observable',component:ObservableComponent},
  {path:'crud',component:TodoMainComponent},
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
