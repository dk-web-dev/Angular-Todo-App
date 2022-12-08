import { Component, OnChanges, OnInit,Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Add } from 'src/app/interface/crud/add.interface';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css'],
})
export class TodoMainComponent implements OnInit{
  todolists: Add[] = [];   // initialization


  constructor(private _crudService: CrudService) {}

  ngOnInit(): void {
    // get all todo list
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
  softupdateTodoList($todo: Add) {
    console.log('soft update', $todo);
     this.todolists.push($todo)
     this.ngOnInit();  // reload list again after push new todo
  }

  //soft Delete TodoList after delete todo item
  softDeleteTodoList(todo: any) {
    console.log('soft delte', todo);
    let indexOfTodo = this.todolists.findIndex(
      (item) => item.title === todo.title
    );
    //remove 1:
    this.todolists.splice(indexOfTodo, 1);
  }
}
