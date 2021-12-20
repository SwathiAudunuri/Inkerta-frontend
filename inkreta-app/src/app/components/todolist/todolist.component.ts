import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TodoService } from "../../core/services/todo.service";
import { UpdatetodoComponent } from "./components/updatetodo/updatetodo.component"
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  constructor(private todo:TodoService) { }
  getdiv:boolean =false;
  ngOnInit(): void {
  }
  fb=new FormBuilder ;
  todoForm = this.fb.group({
    title: ['', Validators.required],
    assignedTo: ['',Validators.required],
    priority: ['',Validators.required],
   dueDate: ['',Validators.required],
    description:['',Validators.required],

});
showMe(){
  this.getdiv=!this.getdiv
}
  onSubmit(){
    if(this.todoForm.valid){    
      console.warn(this.todoForm.value);
      this.todo.todo(this.todoForm.value).subscribe(res=>{
        console.log(res)
      })
    }
  }
}
