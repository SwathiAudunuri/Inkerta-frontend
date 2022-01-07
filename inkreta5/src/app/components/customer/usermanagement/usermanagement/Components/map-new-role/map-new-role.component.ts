import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getAssignedRoles, getAssignedRolesInitialValue } from '../../../Actions/GetAssignedRoles.actions';
import { getUserDetails } from '../../../Actions/GetUserDetails.actions';
import { MapUserRole, MapUserRolenull } from '../../../Actions/MapUserRole.actions';
import { GetRolesState, MapRolesState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-map-new-role',
  templateUrl: './map-new-role.component.html',
  styleUrls: ['./map-new-role.component.css']
})
export class MapNewRoleComponent implements OnInit {
  role:any;
  service3: any;
  roles: any;
  description_text: any=null;
  service: any;
  id: any;
  service4: any;
  loading1: any;
  durationInSeconds: number=10;
  constructor(public dialogRef: MatDialogRef<MapNewRoleComponent>,public store:Store,public userservice:UserManaghementService,public _snackBar:MatSnackBar) { }

  ngOnInit() {
    this.store.dispatch(getAssignedRolesInitialValue())
    this.store.dispatch(MapUserRolenull())
    this.service = this.userservice.userId.subscribe((id:any)=>{
      this.id=id
      const url=Constants.GetUserRoles+this.id
      // //console.log(url)
      this.store.dispatch(getAssignedRoles({url:url}))
    })
    this.service3 = this.store.select(GetRolesState).subscribe((data:any)=>{
      //console.log(data)
      if(data.roles){
        if(data.roles.hasError){

        }
        else{
          this.roles = data.roles.results
        }
      }
    })
    this.service4 = this.store.select(MapRolesState).subscribe((data:any)=>{
      //console.log(data)
      this.loading1 = data.loading
      if(data.result){
        if(data.result.hasError){

        }
        else{
          this.openSnackBar("Your Role is added Successfully")
          this.role=""
          this.description_text=""
          this.close_role()
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
  description(){
    for(var i=0;i<this.roles.length;i++){
      if(this.role === this.roles[i].role_id){
        this.description_text = this.roles[i].role_description
      }
    }
  }
  map_role(){
    const url=Constants.MapUserRole
    const data={ 
      "userId" : this.id,
      "roleId" : this.role
    }
    this.store.dispatch(MapUserRole({url:url,data:data}))
  }
  close_role(){
    this.dialogRef.close();
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service3.unsubscribe()
    this.service4.unsubscribe()
  }
}
