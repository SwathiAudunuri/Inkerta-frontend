import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { CreateUsernull } from '../Actions/CreateUser.actions';
import { GetUserDetailsState, resetPasswordState } from '../Selectors/usermanagement.selectors';
import { MapNewRoleComponent } from './Components/map-new-role/map-new-role.component';
import { UserManaghementService } from './UserManagement.service';
import {getAssignedRolesInitialValue} from '../Actions/GetAssignedRoles.actions'
import { getUserDetailsInitialValue } from '../Actions/GetUserDetails.actions';
import { getUsersInitialValue } from '../Actions/GetUsers.actions';
import { UnMapUserRolenull } from '../Actions/UnMapUserRole.actions';
import { MapUserRolenull } from '../Actions/MapUserRole.actions';
import { resetpassword, resetpasswordInitialValue } from '../Actions/resetpassword.actions';
import { Constants } from 'src/app/constants/constants';
import { SnackBarService } from 'src/app/components/repeated/snackbar/snackbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/repeated/snackbar/snackbar.component';
import { ResetPasswordPopupComponent } from './Components/reset-password-popup/reset-password-popup.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  sidenavshow=false

  edit: boolean=false;
  public nav=true;

  rowdata:any=null;
  
  durationInSeconds = 5;
  rowindex: any=0;
  status:any = '';
  public delete_item=true;
  filterValue: any="";
  imgediturl:any=null;
  // imgurl: any="../../../../../assets/profile.png";
  imgurl: any="./assets/profile.png";
  sno: any;
  useridsuggested: any;
  loading:boolean=false;
  Fullname: any;
  service: any;
  service1: any;
  loading1: any;
  user_id: any=null;
  user_alias: any=null;
  // userid: any="hello";private _snackBar: MatSnackBar
  constructor(private dialog:MatDialog,private store:Store,private modalService: NgbModal,public _myFB: FormBuilder,public userservice:UserManaghementService,private snackservice:SnackBarService,public _snackBar:MatSnackBar) {}
  showFiller = false;
  public ELEMENT_DATA: any = [
    {SlNo: 1,fullname:'Grandhi Ashok', firstname:'Grandhi',lastname:'Ashok', Date: '12-12-2020', Status: true,email:'ashok_grandhi@tecnics.com',phoneno:'6302968919',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
    {SlNo: 2,fullname:'P Chandra', firstname:'P',lastname:'Chandra', Date: '13-12-2020', Status: false,email:'Chandra@tecnics.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 3,fullname:'K Anil',firstname:'K', lastname: 'Anil', Date: '14-12-2020', Status: true,email:'Anil@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 4,fullname:'T Tarun',firstname:'T', lastname: 'Tarun', Date: '15-12-2020', Status: false,email:'Tarun@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 5,fullname:'K phani',firstname:'K', lastname: 'phani', Date: '12-12-2020', Status: true,email:'phani@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
    {SlNo: 6,fullname:'V Gopal',firstname:'V', lastname: 'Gopal', Date: '13-12-2020', Status: false,email:'Gopal@gmail.com',phoneno:'1234567890',role:['vender','Admin','Manager'],image:'./assets/profile.png'},
    {SlNo: 7,fullname:'N premSai', firstname:'N',lastname: 'premSai', Date: '14-12-2020', Status: true,email:'premSai@gmail.com',phoneno:'1234567890',role:['vender'],image:'./assets/profile.png'},
  ];
  
  ngOnInit() {
    
    this.service = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      //console.log(data)
      this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          
        }
        else{
          //console.log(data.details.results)
          if(data.details.results.userdetails){
            this.Fullname = data.details?.results?.userdetails?.first_name+" "+data.details?.results?.userdetails?.last_name
            // this.user_alias = data.details?.results?.userdetails?.user_alias
            // this.user_id = data.details?.results?.userdetails?.user_id
          }
        }
      }})
    
      this.service1 = this.store.select(resetPasswordState).subscribe((data:any)=>{
        this.loading1 = data.loading
        console.log(data)
        if(data?.result){
          if(data?.result?.hasError){
            // this.error = data?.result?.errors?.errorMessage
          }
          else{
            // this.error = ""
            this.openSnackBar(data?.result?.results)
          }
        }
      })
    
  }
  openSnackBar(mess:any) {
    this.snackservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }

  public updaterow=this._myFB.group({
    firstname:[''],
    lastname:[''],
    mobileno:[''],
    email:[''],
    role:[[]],
    status:[false],
    image:['']
  })
  closeResult = '';
  resetpassword(){
    const dialogRef = this.dialog.open(ResetPasswordPopupComponent, { panelClass: 'custom-update-dialog-container',disableClose: true });
    // if(this.user_id && this.user_alias){
    //   var obj ={
    //     "user_id":this.user_id,	
    //     "newPassword":"P@ssw0rd",
    //     "aliasName":this.user_alias
    //   }
    //   console.log(obj)
    //   this.store.dispatch(resetpassword({url:Constants.resetpassword,data:obj}))
    // }
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  user_edit(){
    this.edit=true
  }
  show(){
    this.sidenavshow=false
  }
  // openSnackBar() {
  //   this._snackBar.openFromComponent(PizzaPartyComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
  sidenav(){
    this.nav=false
    this.delete_item=true
  }
  backsidenav(){
    this.nav=true
    this.delete_item=false
    this.sno=null
  }


  delete_row(){
    // this.ELEMENT_DATA.splice(this.rowindex,1)
    // ELEMENT_DATA.splice(index,1);
    // this.childEvent1.emit(this.ELEMENT_DATA)
    // this.childEvent2.emit(false)
    // this.childEvent3.emit(false)
  }
  update_row(value:any,index:any){
    // //console.log(index)
    this.sidenavshow=false
    this.rowdata = value
    this.rowindex = index
    // //console.log(this.rowindex)
    // this.status = value.Status
    // this.sno=value.SlNo
    // this.updaterow.patchValue({
    //     firstname:value.firstname,
    //     lastname:value.lastname,
    //     email:value.email,
    //     mobileno:value.phoneno,
    //     role:value.role,
    //     status:value.Status,
    //     image:''
    //   })
  }
  add_user(){
    this.sidenavshow=true
  }
  search(){
    // //console.log(this.filterValue)
    this.userservice.table_search.next(this.filterValue)
  }
  map_new_role(){
    // this.userservice.showmaprole.next(true)
    const dialogRef = this.dialog.open(MapNewRoleComponent,{panelClass: 'custom-dialog-container' });
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
    this.store.dispatch(CreateUsernull())
    this.store.dispatch(resetpasswordInitialValue())
    this.store.dispatch(getAssignedRolesInitialValue())
    this.store.dispatch(getUserDetailsInitialValue())
    this.store.dispatch(getUsersInitialValue())
    this.store.dispatch(MapUserRolenull())
    this.store.dispatch(UnMapUserRolenull())
  }
}
// @Component({
//   selector: 'snack-bar-component-example-snack',
//   template: `<span class="example-pizza-party">
//   User has created !!!
//   </span>`,
//   styles: [`
//     .example-pizza-party {
//       color: #1a8fcd;
//     }
//   `],
// })
// export class PizzaPartyComponent {}