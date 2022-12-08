import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Todos } from 'src/app/interface/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  title = 'Todos List';

  TodosList: Todos[] = [];
  errMesssage:string="";
 
  constructor(
    private _todoService: TodosService,
    private toaster: ToastrService
   )
  {}

  ngOnInit(): void {
    // return list of todo list
    this._todoService.ToDoList().subscribe({
      next: (response) => {
        console.log('success', response);
        this.TodosList = response;
      },
      error: (err) => {
        console.log("gadabad",err);
        this.errMesssage = err.message;
      },
      complete: () => {
        console.log("completed");
      },
    });
  }

   //add new todo
  receiveNewTodo($event:Todos) {
    console.log(" to parent",$event);
    this.TodosList.push($event);
    this.toaster.success('Todo Added Successfully', ' Todo APP', {
      progressBar: true,
      closeButton: true,
    });
  }

  // delete todo of specific index 
  recieveDeleteTodo($event:any){
      var indexOfTodo = this.TodosList.findIndex(i => i.id === $event.id);
      //remove 1: 
      this.TodosList.splice(indexOfTodo, 1);
      this.toaster.error('Todo deleted Successfully', ' Todo APP', {
        progressBar: true,
        closeButton: true,
      });
  }
}
