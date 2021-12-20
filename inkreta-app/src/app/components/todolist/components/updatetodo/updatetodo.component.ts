import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TodoService } from 'src/app/core/services/todo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatSidenav } from '@angular/material/sidenav';
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
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements AfterViewInit {
  @ViewChild("drawer") drawer: MatSidenav;
  // BASE_URL = "http://172.16.6.25:8080/eInvoiceServices/api/"
  BASE_URL ="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"
  TODO = this.BASE_URL + "todo"
  @Input() drawer1: any;
  statusopen:boolean=false
  @ViewChild(MatPaginator, { static: false }) paginator = []
  searchKey: string = ""
  @ViewChild(MatSort) sort: MatSort[] = [];
  constructor(private http: HttpClient, private todo: TodoService,
  ) { }
  fb = new FormBuilder;
  data: any
  // taskRefId:any; 
  temp: any
  edits: boolean=false;
  public nav=true;
  public delete_item=false;
  sno: any;
  detailstodo : any =null;
  dataSource: any
  assignedTo: string = ''
  createdBy: string = ''
  createdOn: string = ''
  description: string = ''
  dueDate: any
  title: string = ''
  priority: string = ''
  status: string = ''
  comments: string = ''
  taskRefId: string = ''
  selectvar: string = ''
  getdiv: boolean = false;
  rowindex: any;
  rowdata:any=null;
  // toggle = true;
  // changecolor = "Enable";
  ngAfterViewInit() {
    this.getTodoList()
    console.log(this.drawer1)
    console.log(this.dataSource)
  }

  showMe() {
    if(!this.drawer.opened){
      this.drawer1.toggle();
    }
    this.getdiv = !this.getdiv
  }
  getTodoList() {
    this.todo.getTodoList().subscribe(res => {
      this.temp = res
      console.log(this.temp.results)
      this.dataSource = new MatTableDataSource<any>(this.temp.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    //this.http.get(this.TODO).subscribe(res=>{
    // this.data=res
    //this.data=this.data.results
    //this.dataSource=this.data
    //      this.dataSource = new MatTableDataSource<any>(this.data);

    //      this.dataSource.paginator = this.paginator;

    //    console.log(this.data)
    // })

  }
  statuschange(){
    console.log("clicked on status changed button")
  }
  public updaterow=this.fb.group({
    title:[''],
    assignedTo:[''],
    priority:[''],
    dueDate:[''],
    status:[''],
    description:[''],
    comments:[''],
    // taskRefId:['']
  })

  update_row(value:any,index:any){
    this.statusopen = true
    this.detailstodo=value;
    console.log(value)
    if (!this.drawer1.opened) {
    this.rowdata = value
    this.rowindex = value.taskRefId
    // console.log(this.rowindex)
    this.updaterow.patchValue({
      title:value.title,
      assignedTo:value.assignedTo,
      priority:value.priority,
      dueDate:value.dueDate,
      description:value.description,
      comments:value.comments,
      status:value.status,
      taskRefId:value.taskRefId
      })
  }
  }
  displayedColumns: string[] = ['description', 'priority', 'delete'];
  // updateForm = this.fb.group({
  //   title: [{ value: '', disabled: true }, Validators.required],
  //   assignedTo: [{ value: '', disabled: true }, Validators.required],
  //   priority: [{ value: '', disabled: true }, Validators.required],
  //   dueDate: [{ value: '', disabled: true }, Validators.required],
  //   description: [{ value: '', disabled: true }, Validators.required],
  //   comments: [{ value: '', disabled: true }, Validators.required],
  //   status: [{ value: '', disabled: true }, Validators.required],

  // });
  // update(row: any) {
  //   this.statusopen = true
  //   this.detailstodo=row;
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
  // displayedColumns: string[] = ['description', 'priority', 'delete'];
  


  // onSubmit() {
  //   //console.log(this.updateForm.valid)
  //   if (this.updateForm.valid) {

  //     this.todo.updateTodo(this.updateForm.value, this.taskRefId)
  //   }

  // }
  todo_edit(){
      this.edits=true
  }
  backsidenav(){
    this.nav=true
    this.delete_item=false
    this.sno=null
  }

  // changeColor(){
  //   // console.log("clicked on button")
  //   this.toggle = !this.toggle;
  //   this.changecolor = this.toggle ? "Enable" : "Disable";
  // }
  sidenav(){
    this.nav=false
    this.delete_item=true
  }
  change() {

    // }
    // onChange($event:any){
    // console.log($event.target.value)
    if (this.selectvar == "Done") {
      this.todo.getCompletedList().subscribe(res => {
        this.temp = res
        console.log(this.temp.results)
        this.dataSource = new MatTableDataSource<any>(this.temp.results);
        this.dataSource.paginator = this.paginator;

      })
    }
    if (this.selectvar == "Deleted") {
      this.todo.getDeletedList().subscribe(res => {
        this.temp = res
        console.log(this.temp.results)
        this.dataSource = new MatTableDataSource<any>(this.temp.results);
        this.dataSource.paginator = this.paginator;

      })
    }
    if (this.selectvar == "Starred") {
      this.todo.getStarredList().subscribe(res => {
        this.temp = res
        console.log(this.temp.results)
        this.dataSource = new MatTableDataSource<any>(this.temp.results);
        this.dataSource.paginator = this.paginator;

      })
    }
    if (this.selectvar == "Priority") {
      this.todo.getPriorityList().subscribe(res => {
        this.temp = res
        console.log(this.temp.results)
        this.dataSource = new MatTableDataSource<any>(this.temp.results);
        this.dataSource.paginator = this.paginator;

      })
    }
    if (this.selectvar == "All") {
      this.todo.getTodoList().subscribe(res => {
        this.temp = res
        console.log(this.temp.results)
        this.dataSource = new MatTableDataSource<any>(this.temp.results);
        this.dataSource.paginator = this.paginator;

      })
    }


  }
  onDelete(element: any) {
    // element.stopPropagation();
    // element.preventDefault();
    console.log(element)
    this.todo.delete(element, this.taskRefId)
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase()
  }
  // edit() {
  //   this.updateForm.enable()
  // }
  // cancel() {
  //   this.updateForm.disable()
  // }
  tr_highlight(element: any) {

    this.taskRefId = element.taskRefId
  }
}