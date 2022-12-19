import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { CrudService } from '../../../services/crud.service';
import { Add } from 'src/app/interface/crud/add.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Output() emitTodo = new EventEmitter(); // create output decorator

  constructor(
    private _crudService: CrudService,
    private toaster: ToastrService,
    private fb:FormBuilder
  ) {}

   //using formBuilder manage TodoForm
   TodoForm = this.fb.group({
    title: [''],
    description: [''],
  });
  get f() {
    return this.TodoForm.controls;
  }

  ngOnInit(): void {}

  //add new todo method
  addTodo() {
    console.log('newtodo main', this.TodoForm.value);
    this._crudService.addNewTodo(this.TodoForm.value as Add).subscribe({
      next: (response) => {
        console.log('success', response);
        this.toaster.success('todo added succesfully', 'CRUD', {
          progressBar: true,
          closeButton: true,
        });
        this.emitTodo.emit(response); // emit todo new todo
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
