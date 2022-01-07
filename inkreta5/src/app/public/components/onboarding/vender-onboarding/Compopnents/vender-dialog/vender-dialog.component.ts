import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { VerifyMail, VerifyMailInitislValuenull } from '../../Actions/VerifyMail.actions';
import { Constants } from 'src/app/constants/constants';
import { VerifyMailState } from '../../Selectors/OnboardSelector.selector';
import { SendOtpMail } from '../../Actions/SendMail.actions';
import { SendMailState } from '../../Selectors/OnboardSelector.selector';

@Component({
  selector: 'app-vender-dialog',
  templateUrl: './vender-dialog.component.html',
  styleUrls: ['./vender-dialog.component.css']
  // styleUrls: ['../style1.css']
})
export class VenderDialogComponent implements OnInit {
  otp:any;
  resstatus1: any;
  errormess: any="";
  loading: any;
  loading1: any;
  service1: any;
  service2: any;
  constructor(
    public dialogRef: MatDialogRef<VenderDialogComponent>,
    public _store : Store,
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
    this._store.dispatch(VerifyMailInitislValuenull())
    this.service1=this._store.select(VerifyMailState).subscribe((data)=>{
      this.loading = data.loading
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
          this.error=data.result.errors.errorMessage
        }
        else{
          this.error=""
          this.dialogRef.close();
        }
      }
    })
    this.service2=this._store.select(SendMailState).subscribe((data) => {
      this.loading1 = data.loading
    })

  }
  
  mess:any;
  mess1:any;
  error:any;
  status:any=true;
  resend(){
    const url = Constants.SendMail + this.data.email
    //console.log(url)
    this._store.dispatch(SendOtpMail({ url: url }))
    // this._store.dispatch(venderemailverfiy({data:{"gstin":this.data.gstin,"email":this.data.email}}))
  }
  emailcheck(){
    ////console.log(this.data)
    const url = Constants.VerifyMail+this.otp+"/"+this.data.email+"/"+this.data.data.gstin
    ////console.log(url)
    this._store.dispatch(VerifyMail({url:url,data:this.data.data}))
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
  
  }
}
