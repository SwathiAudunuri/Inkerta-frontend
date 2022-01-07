import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from '../../../../../../constants/constants';
import { ChangePassword, ChangePasswordInitialValue } from '../../../Actions/changepassword.actions';
import { changepasswordState, loginState } from '../../../Selectors/profile.selectors';
import { externalValidators, passwordValidator } from './passwordvalidation';
import { SnackbarComponent } from 'src/app/components/repeated/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/components/repeated/snackbar/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loading: any=false;
  service1: any;
  hide = true;
  hide1 = true;
  hide2 = true;
  service2: any;
  error:any=""
  constructor(private dialog:MatDialog,public dialogRef: MatDialogRef<ChangePasswordComponent>,private store:Store,private _myfb:FormBuilder,private snackservice:SnackBarService,public _snackBar:MatSnackBar) { }
  changepassword = this._myfb.group({
    oldpassword:['',[Validators.required]],
    newpassword:['',[Validators.required,externalValidators(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/)]],
    re_newpassword:['',[Validators.required]],
    user_id:[''],
    aliasName:['']
  },{ validators: passwordValidator }
  )
  ngOnInit() {
    this.service1 = this.store.select(changepasswordState).subscribe((data:any)=>{
      this.loading =data.loading
      // console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
          this.error = data?.result?.errors?.errorMessage
        }
        else{
          this.error = ""
          this.openSnackBar(data?.result?.results)
          this.close();
        }
      }
    })
    this.service2 = this.store.select(loginState).subscribe((data)=>{
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
        }
        else{
          this.changepassword.patchValue({
            user_id: data?.result?.results?.userId,
            aliasName: data?.result?.results?.userAlias
          })
        }
      }
    })
  }
  durationInSeconds: number=5;
  openSnackBar(mess:any) {
    this.snackservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }
  get f(){
    return this.changepassword.controls
  }
  close(){
    this.dialogRef.close()
  }
  submit(){
    // console.log(this.changepassword.value)
    var obj={
      "user_id":this.changepassword.value.user_id,	
      "newPassword":this.changepassword.value.newpassword,
      "oldPassword":this.changepassword.value.oldpassword,
      "aliasName":this.changepassword.value.aliasName
      }
    this.store.dispatch(ChangePassword({url:Constants.ChangePassword,data:obj}))
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
    this.store.dispatch(ChangePasswordInitialValue())
  }
}
