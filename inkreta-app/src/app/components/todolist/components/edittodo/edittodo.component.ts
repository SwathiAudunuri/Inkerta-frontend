import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from 'src/app/core/services/todo.service';
export interface TodoElement {

  assignedTo: string;
  createdBy: string;
  createdOn: string;
  description: string;
  dueDate: string;
  flag: boolean;
  priority: string;
  status: string;
}

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  @Output() public childEvent = new EventEmitter()
  @Output() public childEvent1 = new EventEmitter()
  @Input() public updaterow:any;
  @Input() public rowindex:any;
  @ViewChild(MatPaginator, { static: false }) paginator = []

  @ViewChild(MatSort) sort: MatSort[] = [];
  temp: any
  // @Input() public updaterow:any;
  constructor(private http: HttpClient, private todo: TodoService,) { }
  fb = new FormBuilder;
  dataSource: any
  assignedTo: string = ''
  createdBy: string = ''
  createdOn: string = ''
  description: string = ''
  dueDate: any
  title: string = ''
  priority: string = ''
  status: string = ''
  // comments: string = ''
  taskRefId: string = ''
  selectvar: string = ''


  // updateForm = this.fb.group({
  //   title: [{ value: ''}, Validators.required],
  //   assignedTo: [{ value: ''}, Validators.required],
  //   priority: [{ value: ''}, Validators.required],
  //   dueDate: [{ value: '' }, Validators.required],
  //   description: [{ value: ''}, Validators.required],
  //   comments: [{ value: '' }, Validators.required],
  //   status: [{ value: '' }, Validators.required],

  // });

  // update(row: any) {
  //   // this.statusopen = true
  //   // this.detailstodo=row;
  //   console.log(row)
  //   if (!this.drawer1.opened) {
  //     // this.drawer.toggle()
  //     this.assignedTo = row.assignedTo
  //     this.title = row.title
  //     this.priority = row.priority
  //     this.dueDate = row.dueDate
  //     this.status = row.status
  //     this.description = row.description
  //     this.taskRefId = row.taskRefId
  //     const newobj = {
  //       'title': this.title,
  //       'assignedTo': this.assignedTo,
  //       'priority': this.priority,
  //       'dueDate': this.dueDate,
  //       'description': this.description,
  //       'comments': this.comments,
  //       'status': this.status,
  //     }
  //     this.updateForm.setValue(newobj)
  //   }

  // }
  ngOnInit(): void {
 
  }
  back_icon(){
    // this.childEvent1.emit(null)
    this.childEvent.emit(false)
  }
  cancel() {
    this.updaterow.disable()
  }

onSubmit() {
  //console.log(this.updateForm.valid)
  if (this.updaterow.valid) {
    this.taskRefId=this.rowindex
    // this.updaterow.value.comments=this.comments
    console.log(this.updaterow)
    this.todo.updateTodo(this.updaterow.value, this.taskRefId)
  }

}
}
