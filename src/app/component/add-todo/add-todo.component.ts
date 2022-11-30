import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';


import { Addtodo } from './addtodo';
import { Todos } from 'src/app/interface/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todoModel = new Addtodo('', '');

  @Input() Todos: Todos[] = [];  // parent to child (todos => app-add-todo)
  @Output() addTodo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}


  //submit  new todo
  submitTodo() {
    let id = this.Todos.length + 1;
    const todoDetail = {
      id: id,
      title: this.todoModel.title,
      description: this.todoModel.description,
      active: true,
    };
    console.log("from child",todoDetail);
    this.addTodo.emit(todoDetail);
  }
}
