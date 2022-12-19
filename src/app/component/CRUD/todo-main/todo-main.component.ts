import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ITodolist } from 'src/app/interface/crud/todolist.interface';
import { TodoModel } from 'src/app/classes/todomodel';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css'],
})
export class TodoMainComponent implements OnInit {
  //todolists: ITodolist[] = []; // using interface
  
  todolists: TodoModel[] = [];   // using angular class model
 
  constructor(private _crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllTodoList();
  }

  // get all todo list
  getAllTodoList() {
    this._crudService.getTodoList().subscribe({
      next: (response) => {
        console.log('todolist main', response);
        this.todolists = response;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('fetch todolist completed');
      },
    });
  }

  //soft update TodoList after added new todo
  softupdateTodoList($todo: ITodolist) {
    console.log('soft update', $todo);
    this.todolists.push($todo);
    this.ngOnInit(); // reload list again after push new todo
  }

  //soft Delete TodoList after delete todo item
  softDeleteTodoList(todo: ITodolist) {
    console.log('soft delte', todo);
    let indexOfTodo = this.todolists.findIndex(
      (item) => item.title === todo.title
    );
    //remove 1:
    this.todolists.splice(indexOfTodo, 1);
  }
}
