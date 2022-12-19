import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';
import {ITodolist} from '../../../interface/crud/todolist.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title:string = 'todo lists';
  @Input() AllTodo: ITodolist[] = []; // parent to child (todos => todo-item)
  @Output() DeleteTodo = new EventEmitter();

  constructor(
    private _crudService: CrudService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  // delete todo
  deleteTodo(todo: ITodolist) {
    this._crudService.deleteTodo(todo._id).subscribe({
      next: (res) => {
        console.log(res);
        this.toaster.error(res.message, 'TODO', {
          progressBar: true,
          closeButton: true,
        });

        this.DeleteTodo.emit(todo); // emitted deleted todo id
      },
      error: (err) => {
        console.log(err);
        this.toaster.error(err.message, 'Todo', {
          progressBar: true,
          closeButton: true,
        });
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

}
