import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {

  constructor(private fb:FormBuilder,private http: HttpClient, private todo: TodoService) { }
@Input() viewdetails:any;
@Input() public updaterow:any;
@Input() public rowindex:any;
description : any =''
title:any =''
assignedTo: any =''
dueDate: any =''
priority: any =''
taskRefId: string = ''
dumy: any="";
// status: any =''
// rowindex:string=''
  ngOnInit(): void {
  }
  // ngOnChanges(changes: SimpleChanges){
  //   const newNumberChange : SimpleChange = changes.rowindex;
  //   //console.log(" current value",newNumberChange.currentValue)
  //   // this.taskRefId=this.rowindex
  // }
   ngDoCheck(){
     if(this.viewdetails!==null){
      //  //console.log(this.viewdetails)
       this.description=this.viewdetails.description
       this.title = this.viewdetails.title
       this.assignedTo = this.viewdetails.assignedTo
       this.priority = this.viewdetails.priority
       this.dueDate = this.viewdetails.dueDate
       this.taskRefId= this.viewdetails.taskRefId
     }
   }
   onSubmit() {
    ////console.log(this.updateForm.valid)
    if (this.updaterow.valid) {
      this.taskRefId=this.rowindex
      // this.updaterow.value.comments=this.comments
      //console.log(this.updaterow.value.comments)
      //console.log(this.updaterow.value)
      this.todo.updateTodo(this.updaterow.value, this.taskRefId)
      // alert("Comment added")
    }
  
  }
  comments(x:any){
      //console.log(x.key)
      // this.dumy = this.dumy + value.key
      this.dumy += x.target.value+"|"
      //console.log(this.dumy)
      this.updaterow.patchValue({
        taskActivities :[ 
          {
                  action: '',
                  comments: this.dumy,
                  id:1
              }
          //     {
          //       action: '',
          //       comments: this.dumy,
          //       id:2
          //   },
          //   {
          //     action: '',
          //     comments: this.dumy,
          //     id:3
          // },
            ]
      })
  }
  }

