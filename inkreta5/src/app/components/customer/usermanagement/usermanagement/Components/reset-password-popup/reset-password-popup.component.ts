import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from '../../../../../../constants/constants';
import { SnackbarComponent } from 'src/app/components/repeated/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/components/repeated/snackbar/snackbar.service';
import { GetUserDetailsState, resetPasswordState } from '../../../Selectors/usermanagement.selectors';
import { resetpassword, resetpasswordInitialValue } from '../../../Actions/resetpassword.actions';
import { externalValidators, passwordValidator } from './passwordvalidation';

@Component({
  selector: 'app-reset-password-popup',
  templateUrl: './reset-password-popup.component.html',
  styleUrls: ['./reset-password-popup.component.css']
})
export class ResetPasswordPopupComponent implements OnInit {
  loading: any=false;
  service1: any;
  hide = true;
  hide1 = true;
  hide2 = true;
  service2: any;
  error:any=""
  service: any;
  constructor(private dialog:MatDialog,public dialogRef: MatDialogRef<ResetPasswordPopupComponent>,private store:Store,private _myfb:FormBuilder,private snackservice:SnackBarService,public _snackBar:MatSnackBar) { }
  changepassword = this._myfb.group({
    newpassword:['',[Validators.required,externalValidators(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/)]],
    re_newpassword:['',[Validators.required]],
    user_id:[''],
    aliasName:['']
  },{ validators: passwordValidator }
  )
  ngOnInit() {
    this.service1 = this.store.select(resetPasswordState).subscribe((data:any)=>{
      this.loading = data.loading
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
          // this.error = data?.result?.errors?.errorMessage
        }
        else{
          // this.error = ""
          this.openSnackBar(data?.result?.results)
          this.close()
        }
      }
    })

    this.service = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      //console.log(data)
      // this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          
        }
        else{
          //console.log(data.details.results)
          if(data.details.results.userdetails){
            this.changepassword.patchValue({
              user_id: data.details?.results?.userdetails?.user_id,
              aliasName: data.details?.results?.userdetails?.user_alias
            })
          }
        }
      }})
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
    var obj ={
      "user_id":this.changepassword.value.user_id,	
      "newPassword":this.changepassword.value.newpassword,
      "aliasName":this.changepassword.value.aliasName
    }
    console.log(obj)
    this.store.dispatch(resetpassword({url:Constants.resetpassword,data:obj}))
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
    this.store.dispatch(resetpasswordInitialValue())
  }
}
