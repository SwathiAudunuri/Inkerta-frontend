import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Constants } from 'src/app/constants/constants';
import { getUsers, getUsersInitialValue } from '../../../Actions/GetUsers.actions';
import { GatUsersState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @Output() public nav = new EventEmitter()
  @Output() public delete_item = new EventEmitter()
  @Output() public sidenavshow = new EventEmitter()
  displayedColumns: string[] = ['Fullname', 'Date', 'User Alias Name'];
  public ELEMENT_DATA: any 
  //  [
  //   {SlNo: 1,fullname:'Grandhi Ashok', firstname:'Grandhi',lastname:'Ashok', Date: '12-12-2020', Status: true,email:'ashok_grandhi@tecnics.com',phoneno:'6302968919',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
  //   {SlNo: 2,fullname:'P Chandra', firstname:'P',lastname:'Chandra', Date: '13-12-2020', Status: false,email:'Chandra@tecnics.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  //   {SlNo: 3,fullname:'K Anil',firstname:'K', lastname: 'Anil', Date: '14-12-2020', Status: true,email:'Anil@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  //   {SlNo: 4,fullname:'T Tarun',firstname:'T', lastname: 'Tarun', Date: '15-12-2020', Status: false,email:'Tarun@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  //   {SlNo: 5,fullname:'K phani',firstname:'K', lastname: 'phani', Date: '12-12-2020', Status: true,email:'phani@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  //   {SlNo: 6,fullname:'V Gopal',firstname:'V', lastname: 'Gopal', Date: '13-12-2020', Status: false,email:'Gopal@gmail.com',phoneno:'1234567890',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
  //   {SlNo: 7,fullname:'N premSai', firstname:'N',lastname: 'premSai', Date: '14-12-2020', Status: true,email:'premSai@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  // ];
  dataSource: any ;
  loading: any;
  userId: any;
  error: any;
  service: any;
  service1: any;
  page:number=1;
  pageSize:number=8
  temp: any;
  partnerId: any;
  data: any=[];
  filterinvoicelist: any;
  mess: any;
  constructor(public store:Store,public userservice:UserManaghementService) { }

  ngOnInit(): void {
    this.store.dispatch(getUsersInitialValue())
    this.store.dispatch(getUsers({url:Constants.GetUsers}))
    this.service = this.store.select(GatUsersState).subscribe((data)=>{
      this.loading = data.loading
      //console.log(data)
      if(data.users){
        if(data.users.results.hasError){
          this.error = data.users.results.hasError.errors.errorMessage
        }
        else{
          this.error=""
          this.temp = data.users.results
          this.data = data.users?.results
          this.filterinvoicelist = this.data 
          this.dataSource =new MatTableDataSource<any>(data.users.results);
          this.dataSource.paginator=this.paginator
          // //console.log(data.users.results[0].userId)
          this.userservice.userId.next(data.users.results[0].userId)
          this.userId = data.users.results[0].userId
        }
      }
    })
    this.service1= this.userservice.table_search.subscribe((filterValue:any)=>{


      if(filterValue && this.data){
        this.page =1
          this.data=this.filterinvoicelist.filter((e:any) =>  (e.firstName+e.lastName+e.email+e.primaryPhoneNumber).includes(filterValue));
        if(this.data.length === 0){
          this.mess="No Data Found"
        }
        else{
          this.mess=""
        }
      }
      else if(filterValue === ""){
        this.data = this.temp
      }
    })
    this.userservice.partnerId.subscribe((data:any)=>{
      this.partnerId = data
      //console.log(data)
    })
  }
  update_row(value:any,index:any){
    this.userId=value.userId
    //console.log(value.userId)
    this.userservice.userId.next(value.userId)
  }
  sidenav(){
    this.nav.emit(false)
    this.delete_item.emit(true)
    this.sidenavshow.emit(false)
  }
  applyFilter(value: any) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  mainArraydesc: any = [];
  nameToggle = 1;
  numToggle: number = 1
  onname() {
    this.mainArraydesc = []
    this.numToggle = 1
    if(this.nameToggle < 3){
    this.nameToggle = this.nameToggle + 1;
    }
    else if(this.nameToggle === 3){
      this.nameToggle = this.nameToggle - 1;
    }
    const clonedData = cloneDeep(this.data);
    clonedData.sort(function (a: any, b: any) {
      var a_fllname:any = a.firstName +" "+a.lastName
      var b_fllname:any = b.firstName +" "+b.lastName
      return a_fllname - b_fllname
    });
    if( this.nameToggle === 2){
      this.data = clonedData
    }
    else if(this.nameToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.data = this.mainArraydesc
    }
  }
  onnumber(){
    this.mainArraydesc = []
    this.nameToggle = 1;
    if(this.numToggle < 3){
    this.numToggle = this.numToggle + 1;
    }
    else if(this.numToggle === 3){
      this.numToggle = this.numToggle - 1;
    }
    const clonedData = cloneDeep(this.data);
    clonedData.sort(function (a: any, b: any) {
      return a.email - b.email
    });
    if( this.numToggle === 2){
      this.data = clonedData
    }
    else if(this.numToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.data = this.mainArraydesc
    }
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }

}
