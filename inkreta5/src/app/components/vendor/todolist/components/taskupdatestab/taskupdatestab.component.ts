import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { id } from '@swimlane/ngx-charts';
import { TodoService } from 'src/app/core/services/todo.service';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Swathi Adunuri',comments:'Updated Task'},
  {actionOn:'Aug 20, 2021 1:00:23',actionBy:'Swathi Adunuri',comments:'Commented on Task'},
  {actionOn:'Aug 19, 2021 10:15:25',actionBy:'Swathi Adunuri',comments:'Task Inprogress'},
  {actionOn:'Aug 17, 2021 9:30:25',actionBy:'Swathi Adunuri',comments:'Task has Changed'}
]
@Component({
  selector: 'app-taskupdatestab',
  templateUrl: './taskupdatestab.component.html',
  styleUrls: ['./taskupdatestab.component.css']
})
export class TaskupdatestabComponent implements OnInit {

  constructor(private http: HttpClient, private todo: TodoService,) { }
  @Input() title:any;
//   @Input() public taskRefId:any;
//   temp: any
//   dataSource: any
//   displayedColumns: string[] = ['action_on', 'comments'];
//   @ViewChild(MatPaginator, { static: false }) paginator = []
//   searchKey: string = ""
//   @ViewChild(MatSort) sort: MatSort[] = [];
//  id:any=319;
  ngOnInit(): void {
    // this.getTodoList()
  }
  // ngOnChanges(changes: SimpleChanges){
    // const newNumberChange : SimpleChange = changes.taskRefId;
    // //console.log(" current value",newNumberChange.currentValue)
    // this.taskRefId=this.rowindex
    // this.getTodoList(newNumberChange.currentValue)
  // }
  // getTodoList(value:any) {
    // //console.log(this.taskRefId)
    // //console.log(this.id)
    // if(this.taskRefId!==""){
    //   //console.log(value)
    // //console.log(this.id)
    // this.todo.getAlltodoComments(value).subscribe(res => {
    //   //console.log(res)
    //   this.temp = res
    //   //console.log(this.temp)
    //   this.dataSource = new MatTableDataSource<any>(this.temp);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
  // }
   
  dataSource=ELEMENT_DATA;
  displayedColumns: string[] = ['actionOn', 'comments'];

}

