import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialComponent } from './component/material/material.component';
import { HomeComponent } from './component/home/home.component';
import { TodosComponent } from './component/todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
