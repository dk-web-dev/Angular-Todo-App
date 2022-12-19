import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { ITodolist } from 'src/app/interface/crud/todolist.interface';

interface SingleTodo {
  _id:string,
  title: string;
  description:string
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  //singleTodo:Employee={};
   singleTodo = {} as SingleTodo;

  constructor(
    private _crudService: CrudService,
    private toaster:ToastrService,
    private router: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit(): void {     
    let id:string | null = this.router.snapshot.paramMap.get('id');
    
    this.getEditTodo(id)  // call method for fetch single todo by id
 
  }

 // feth single todo method
  getEditTodo(id: string | null){
    this._crudService.getTodoById(id).subscribe({
      next:(res)=>{
        console.log("single todo",res);
        this.singleTodo = res;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("fetch single todo completed")
      }
    })
  }

  //edit todo
  editTodo(todo:ITodolist) {
    console.log('update todo detail',todo);
    this._crudService.editTodo(todo).subscribe({
      next:(res)=>{
         console.log("update",res);
         this.toaster.info("todo item update succesfully","TODO",{
          closeButton:true,
          progressBar:true
         })
         this.route.navigate(['/crud']);   // after update navigated to the main component
      },
      error:(err)=>{
         console.log(err)
         this.toaster.error("somethind wrong !!","TODO",{
          closeButton:true,
          progressBar:true
         })
      },
      complete:()=>{
        console.log("update completed")
      }
    })
  }
}
