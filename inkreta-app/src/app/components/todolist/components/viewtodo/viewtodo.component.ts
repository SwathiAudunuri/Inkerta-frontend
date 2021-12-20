import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
@Input() viewdetails:any;
description : any =''
title:any =''
assignedTo: any =''
dueDate: any =''
priority: any =''
// status: any =''

  ngOnInit(): void {
  }

   ngDoCheck(){
     if(this.viewdetails!==null){
      //  console.log(this.viewdetails)
       this.description=this.viewdetails.description
       this.title = this.viewdetails.title
       this.assignedTo = this.viewdetails.assignedTo
       this.priority = this.viewdetails.priority
       this.dueDate = this.viewdetails.dueDate
     }
   }
}
