import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {

  singleTodo:any=[];

  constructor(
    private _crudService: CrudService,
    private toaster:ToastrService,
    private router: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit(): void {
    let id: any = this.router.snapshot.paramMap.get('id');

    // feth single todo method
    this._crudService.getTodoById(id).subscribe({
       next:(res)=>{
          console.log(res);
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
  editTodo(todo:any) {
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
