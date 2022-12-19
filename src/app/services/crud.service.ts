import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Add } from '../interface/crud/add.interface';
import { ITodolist } from '../interface/crud/todolist.interface';
import { Observable } from 'rxjs';
import { TodoModel } from '../classes/todomodel';
@Injectable({
  providedIn: 'root',
})
export class CrudService {

   apiURL = environment.API_URL;
  //private baseURL = `http://localhost:4000`;

  constructor(private _http: HttpClient) {}
  // httpHeaders = new HttpHeaders({
  //   'content-type': 'application/json',
  //   Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ',
  // });

  //add
  addNewTodo(todo: Add): Observable<Add[]> {
    console.log('newTodo from service', todo);
    return this._http.post<Add[]>(`${this.apiURL}/add`, todo);
  }

  //get list
  getTodoList(): Observable<ITodolist[]> {
    return this._http.get<ITodolist[]>(`${this.apiURL}/todolist`);
  }

  //delete
  deleteTodo(id: string): Observable<{ id: string; message: string }> {
    return this._http.delete<{ id: string; message: string }>(
      `${this.apiURL}/delete/${id}`
    );
  }

  //get todo by id
  getTodoById(id: string | null): Observable<ITodolist> {
    return this._http.get<ITodolist>(`${this.apiURL}/todolist/${id}`);
  }

  //update todo
  editTodo(todo: ITodolist): Observable<ITodolist[]> {
    return this._http.patch<ITodolist[]>(
      `${this.apiURL}/edit/${todo._id}`,
      todo
    );
  }
  
}
