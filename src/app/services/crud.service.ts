import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Add } from '../interface/crud/add.interface';
import { pipe, map, Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseURL = `http://localhost:4000`;
  constructor(private _http: HttpClient) {}

  //add
  addNewTodo(todo: Add): Observable<any> {
    console.log('newTodo from service', todo);
    return this._http.post(`${this.baseURL}/add`, todo);
  }

  //get list
  getTodoList(): Observable<any> {
    return this._http.get(`${this.baseURL}/todolist`);
  }

  //delete
  deleteTodo(id: string): Observable<any> {
    return this._http.delete(`${this.baseURL}/delete/${id}`);
  }

  //get todo by id
  getTodoById(id: string):Observable<any>{
    return this._http.get(`${this.baseURL}/todolist/${id}`);
  }


  //update todo
   editTodo(todo:any):Observable<any>{
      return this._http.patch(`${this.baseURL}/edit/${todo._id}`, todo)
   }
}
