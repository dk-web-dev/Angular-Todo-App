import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../../../services/crud.service';
import { Add } from 'src/app/interface/crud/add.interface';
import { Router } from '@angular/router';

class Addtodo {
  constructor(public title: string, public description: string) {}
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  @Output() emitTodo = new EventEmitter();  // create output decorator

  todoModel = new Addtodo('', '');     // create object for todo

  constructor(
    private _crudService: CrudService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //add new todo method
  addTodo() {
    console.log('newTodo', this.todoModel);
    this._crudService.addNewTodo(this.todoModel).subscribe({
      next: (response) => {
        console.log('success', response);
        this.toaster.success('todo added succesfully', 'CRUD', {
          progressBar: true,
          closeButton: true,
        });
        this.emitTodo.emit(response.data); // emit todo new todo
      },
      error: (err) => {
        console.log('gadabad', err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
