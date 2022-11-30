import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Todos } from 'src/app/interface/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  title = 'your Todos';

  @Input() Todos: Todos[] = []; // parent to child (todos => todo-item)
  @Output() deleteTodo = new EventEmitter(); // pass child to parent

  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {}

  //todo delete method
  TodoDelete(todo: Todos) {
    console.log('delete event trigger', todo);
    this.deleteTodo.emit(todo);
  }

  //todo edit method
  TodoEdit(todo:Todos){
      console.log("edit todo detail",todo)
  }

  //todo completed stripe method
  todoCompleted(task:any) {
    task.status = !task.status;
    console.log(task.status)
  }

  
}
