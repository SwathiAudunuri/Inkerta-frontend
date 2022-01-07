import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

const ELEMENT_DATA: any = [
  { SlNo: 1, date: '2021-02-31', time: '22:36', username: 'chandra', action: 'Invoice created', status: 'Success', catagories: 'invoice', eventID: '598245', Subject: '', SID: '36987', AccID: 'AD987', AccDomain: 'Admin', LogID: '481826', LogInfo: '9874125', LogType: 'Ok' },
  { SlNo: 2, date: '2021-03-25', time: '23:36', username: 'ashok', action: 'Query created', status: 'Failed', catagories: 'query', eventID: '598245', Subject: '', SID: '14786', AccID: 'AD008', AccDomain: 'Admin', LogID: '81826', LogInfo: '9874125', LogType: 'Ok' },
  { SlNo: 3, date: '2020-07-30', time: '02:36', username: 'prem', action: 'Task created', status: 'Success', catagories: 'task', eventID: '598245', Subject: '', SID: '32697', AccID: 'VD001', AccDomain: 'Vendor', LogID: '48826', LogInfo: '974125', LogType: 'Ok' },
  { SlNo: 4, date: '2012-09-10', time: '12:36', username: 'tarun', action: 'Logged out', status: 'Failed', catagories: 'logout', eventID: '598245', Subject: '', SID: '61988', AccID: 'AD998', AccDomain: 'Admin', LogID: '48126', LogInfo: '987415', LogType: 'error' },
  { SlNo: 5, date: '2018-10-05', time: '19:36', username: 'vijay', action: 'Query closed', status: 'Success', catagories: 'query', eventID: '598245', Subject: '', SID: '37894', AccID: 'CL00178', AccDomain: 'Admin', LogID: '48182', LogInfo: '987125', LogType: 'Ok' },
  { SlNo: 6, date: '2016-12-03', time: '07:36', username: 'swathi', action: 'Task created', status: 'Success', catagories: 'task', eventID: '598245', Subject: '', SID: '74518', AccID: 'AD987', AccDomain: 'Admin', LogID: '41826', LogInfo: '874125', LogType: 'Ok' },
  { SlNo: 7, date: '2014-03-02', time: '07:36', username: 'sandeep', action: 'Logged in', status: 'Success', catagories: 'login', eventID: '598245', Subject: '', SID: '77516', AccID: 'AD987', AccDomain: 'Admin', LogID: '987412', LogInfo: '874127', LogType: 'Ok' },
  { SlNo: 8, date: '2012-11-01', time: '12:36', username: 'tarun', action: 'Logged out', status: 'Failed', catagories: 'login', eventID: '598245', Subject: '', SID: '61988', AccID: 'AD998', AccDomain: 'Admin', LogID: '48126', LogInfo: '987415', LogType: 'error' },
  { SlNo: 9, date: '2010-09-30', time: '16:36', username: 'gopal', action: 'Invoice created', status: 'Failed', catagories: 'invoice', eventID: '598245', Subject: '', SID: '61988', AccID: 'AD998', AccDomain: 'Admin', LogID: '48126', LogInfo: '987415', LogType: 'error' }
];

@Component({
  selector: 'app-logmanagement',
  templateUrl: './logmanagement.component.html',
  styleUrls: ['./logmanagement.component.css']
})
export class LogmanagementComponent implements OnInit {

  date: any;
  time: any;
  description: any;
  action: any;
  status: any;
  eventID: any;
  Subject: any;
  SID: any;
  AccID: any;
  AccDomain: any;
  LogID: any;
  LogInfo: any;
  LogType: any;
  flitertoggle: any = false;
  sl: any

  // succ:any = false;
  // fail:any= false;
  login: any = false;
  invoice: any = false;
  query: any = false;
  task: any = false;
  q: any = false;


  statusall!: FormGroup;
  val: any;
  data: any = ELEMENT_DATA;
  dummyarray: any = [];
  dummyarraydata: any = [];
  a: any;
  dummydata2: any = [];
  b: any;
  searchbarhide: any = false;
  catagory: any;
  selectstatus: any = "all";
  selectsuccess: any = [];
  checkbox: any = false

  startdate: any;
  enddate: any;

  constructor() {}

  // filtertogglefun(){
  //   this.flitertoggle = !this.flitertoggle
  //   this.searchbarhide = true
  // }

  showstatus() {
    this.dummyarraydata = []
    this.flitertoggle = false

    //console.log(this.dummyarray)

    for (let i = 0; i < this.dummyarray.length; i++) {
      // this.a = this.data.filter((product: any) =>
      // product.status.toLocaleLowerCase().indexOf(this.dummyarray[i]) !== -1);

      this.b = this.data.filter((product: any) =>
        product.catagories.toLocaleLowerCase().indexOf(this.dummyarray[i]) !== -1);


      // this.dummyarraydata = this.dummyarraydata.concat(this.a)
      this.dummyarraydata = this.dummyarraydata.concat(this.b)
      //console.log(this.dummyarraydata)
    }

    if (this.selectstatus === 'all') {
      // //console.log("ALL printed")
      this.dataSource = this.dummyarraydata
    }
    else if (this.selectstatus === 'Success' || this.selectstatus === 'Failed') {
      this.dummyarraydata = this.dummyarraydata.filter((product: any) => product.status === this.selectstatus)
      this.dataSource = this.dummyarraydata
    }


    //this.dataSource = this.dummyarraydata

    if (this.login === false && this.invoice === false && this.query === false && this.task === false) {
      this.dataSource = ELEMENT_DATA
    }

    //  if(this.dummyarray == [] && this.selectstatus === 'Success'){
    //    this.selectsuccess =this.dataSource
    //    this.selectsuccess = this.selectsuccess.filter( (prod:any)=> prod.status === 'Success')
    //    this.dataSource = this.selectstatus
    //  }
    //console.log(this.selectstatus)
  }

  value(value: any) {
    this.checkbox = true
    this.dummyarraydata = []
    // if(value === "1"){
    //   this.succ = !this.succ
    // }
    // if(value === "2"){
    //   this.fail = !this.fail
    // }
    if (value === "3") {
      this.login = !this.login
    }
    if (value === "4") {
      this.invoice = !this.invoice
    }
    if (value === "5") {
      this.query = !this.query
    }
    if (value === "6") {
      this.task = !this.task
    }
  }

  clicked(value: any) {
    this.duplicate(value)
    ////console.log(this.succ)
    ////console.log(this.login)
  }

  duplicate(key: any) {
    if (this.dummyarray.indexOf(key) > 0) {
      //dont push it
    }
    else if (this.dummyarray.indexOf(key) < 0) {
      this.dummyarray.push(key)

      // this.statusall.patchValue({
      //   status : this.dummyarray
      // })
    }
  }

  delete(value: any) {
    this.checkbox = false
    // if(value === 'Success')
    // {
    //   //console.log("sucess")
    //   this.succ = false
    // }
    // else if(value === 'Failed'){
    //   //console.log("fail")
    //   this.fail = false
    // }
    // else 
    if (value === 'login') {
      //console.log("fail")
      this.login = false
    }
    else if (value === 'invoice') {
      //console.log("fail")
      this.invoice = false
    }
    else if (value === 'query') {
      //console.log("fail")
      this.query = false
    }
    else if (value === 'query') {
      //console.log("fail")
      this.task = false
    }
    //console.log("delete")
    this.dummydata2 = this.dataSource
    this.dummyarray.splice(this.dummyarray.indexOf(value), 1)

    if (this.dummyarraydata.length > 0) {
      for (let j = 0; j <= this.dummyarraydata.length; j++) {
        //console.log(this.dummyarraydata[j])
        if (this.dummyarraydata[j].status == value) {
          this.dummydata2.splice(j, 1)
        }
      }
      this.dataSource = this.dummydata2
    }
  }

  ngOnInit() {
    if (this.q === false) {
      this.onrowclick(this.dataSource.data[0])
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  showFiller = false;
  displayedColumns: string[] = ['date', 'username', 'action', 'status'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // this.dataSource = this.data.filter(event);

    //console.log(this.dataSource)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onrowclick(row: any) {
    this.q = true
    //console.log(row)
    this.sl = row.SlNo
    this.date = row.date
    this.time = row.time;
    this.action = row.action;
    this.status = row.status
    this.eventID = row.eventID
    this.Subject = row.Subject
    this.SID = row.SID
    this.AccID = row.AccID
    this.AccDomain = row.AccDomain
    this.LogID = row.LogID
    this.LogInfo = row.LogInfo
    this.LogType = row.LogType
    this.catagory = row.catagories
  }
}