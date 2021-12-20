import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { emailotp, emailverfiy } from '../store/Actions';
import { getemailotpresult, getstatus1, stepperState } from '../store/States';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./style.css']
})
export class DialogComponent implements OnInit {
  otp:any;
  resstatus1: any;
  errormess: any="";
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public _store : Store<{otp:stepperState}>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
      this.counter$ = timer(0,1000).pipe(
        take(this.count),
        map(() => {--this.count, this.flag=this.count}),
      )
      
    }
    counter$: any;
  count:any = 20;
  flag:any ;
  
  // constructor() {
    
      
    // );
  //   setTimeout(()=>{
  //     this.flag = false;
  //   },20000)
  // }
  ngOnInit(): void {
    
    // this._store.select(getemailotpresult).subscribe(mess =>{
    //   this.mess = mess;
    // })
  }
  
  mess:any;
  mess1:any;
  error:any;
  status:any=true;
  ngAfterViewChecked(){
    this._store.select(getemailotpresult).subscribe(mess =>{
      this.mess = mess;
    })
    this._store.select(getstatus1).subscribe(resstatus1 => { this.resstatus1 = resstatus1})
  }
  resend(){
    this._store.dispatch(emailverfiy({data:{"gstin":this.data.gstin,"email":this.data.email}}))
  }
  emailcheck(){
    // console.log(this.data.gstin)
    // console.log(this.data.email)
    console.log(this.data)
    this._store.dispatch(emailotp({data1:{"gstin":this.data.gstin,"email":this.data.email,"otp":this.otp}}))
    console.log("dispatch done")
    setTimeout(()=>{
    console.log("otp",this.resstatus1)
    this.mess1=this.mess.results
    if(this.resstatus1 === false){
      this.status = true
      this.dialogRef.close();
      this.data.status1 = true
      
    }
    if(this.resstatus1 === true){
      this.error = "Invalid OTP"
    }
    this.resstatus1=true
    }
    ,1000)
  }
}
