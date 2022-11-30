import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../interface/todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
   public todo_url:string="assets/api/todos.json";

  constructor(private http:HttpClient) { }

  //get Todo List
  ToDoList():Observable<Todos[]>{
    return this.http.get<Todos[]>(this.todo_url);
  }
}
