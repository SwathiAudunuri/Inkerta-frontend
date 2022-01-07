import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getAssignedRoles, getAssignedRolesInitialValue } from '../../../Actions/GetAssignedRoles.actions';
import { getUserDetails } from '../../../Actions/GetUserDetails.actions';
import { MapUserRole, MapUserRolenull } from '../../../Actions/MapUserRole.actions';
import { UnMapUserRole, UnMapUserRolenull } from '../../../Actions/UnMapUserRole.actions';
import { GetRolesState, GetUserDetailsState, MapRolesState, UnMapRolesState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-role-mapping',
  templateUrl: './role-mapping.component.html',
  styleUrls: ['./role-mapping.component.css']
})
export class RoleMappingComponent implements OnInit {
  displayedColumns: string[] = ['Role','Action'];
  dataSource: any;
  Name:any;
  role:any;
  array:any=[];
  show:boolean=false;
  service1: any;
  loading: any;
  error: any;
  service: any;
  id: any;
  service2: any;
  service3: any;
  roles: any=[];
  description_text: any;
  service4: any;
  service5: any;
  loading1: any;
  loading2: any;
  durationInSeconds: number=10;
  constructor(public userservice:UserManaghementService,public store:Store,public _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    // this.store.dispatch(getAssignedRolesInitialValue())
    // this.store.dispatch(MapUserRolenull())
    this.store.dispatch(UnMapUserRolenull())
    this.dataSource =new MatTableDataSource<any>(this.array);
    this.service = this.userservice.userId.subscribe((id:any)=>{
      this.id=id
    })
    this.service1 = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      //console.log(data)
      this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          this.error = data.details.hasError.errors.errorMessage
        }
        else{
          //console.log(data.details.results)
          if(data.details.results.partnerroles){
            this.dataSource =new MatTableDataSource<any>(data.details.results.partnerroles)
          }
          // this.imgurl = 
        }
      }
    })
    this.service5 = this.store.select(UnMapRolesState).subscribe((data:any)=>{
      //console.log(data)
      this.loading2 = data.loading
      if(data.result){
        if(data.result.hasError){

        }
        else{
          this.openSnackBar("Your Role has deleted Successfully")
          const url = Constants.GetUserDetails+this.id
          this.store.dispatch(getUserDetails({url:url}))
        }
      }
    })
  }
  openSnackBar(mess:any) {
    this.userservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }
  update_row(value:any,index:any){
    
  }
  add(){
    const obj={Name:this.Name,role:this.role}
    this.array.push(obj)
    this.dataSource =new MatTableDataSource<any>(this.array);
    this.Name=""
    this.role=""
  }
  delete(element:any){
    const url=Constants.UnMapUserRole
    const data = { 
      "userId" : this.id,
      "roleId" : element.role_id
    }
    this.store.dispatch(UnMapUserRole({url:url,data:data}))
      // this.array.splice(index,1);
      // //console.log(this.array)
      // this.dataSource =new MatTableDataSource<any>(this.array);
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
    // this.service2.unsubscribe()
    // this.service3.unsubscribe()
    // this.service4.unsubscribe()
    this.service5.unsubscribe()
  }
}
