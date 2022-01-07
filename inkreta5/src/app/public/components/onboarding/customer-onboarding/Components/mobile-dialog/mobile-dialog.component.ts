import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { VerifyMail, VerifyMailInitislValuenull } from '../../Actions/VerifyMail.actions';
import { Constants } from 'src/app/constants/constants';
import { SendMobileState, VerifyMailState, VerifyMobileState } from '../../Selectors/OnboardSelector.selector'
import { VerifyMobile, VerifyMobileInitislValuenull } from '../../Actions/VerifyMobile.actions';

@Component({
  selector: 'app-mobile-dialog',
  templateUrl: './mobile-dialog.component.html',
  styleUrls: ['./mobile-dialog.component.css']
})
export class MobileDialogComponent implements OnInit {
  otp:any;
  resstatus1: any;
  errormess: any="";
  loading: any;
  service2: any;
  loading1: any;
  service1: any;
  constructor(
    public dialogRef: MatDialogRef<MobileDialogComponent>,
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
    this._store.dispatch(VerifyMobileInitislValuenull())
    this.service1=this._store.select(VerifyMobileState).subscribe((data)=>{
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
    this.service2=this._store.select(SendMobileState).subscribe((data) => {
      this.loading1 = data.loading
    })

  }
  
  mess:any;
  mess1:any;
  error:any;
  status:any=true;
  resend(){
    const url = Constants.VerifyMobile+this.otp+"/"+this.data.Number+"/"+this.data.data.gstin
    //console.log(url)
    this._store.dispatch(VerifyMobile({url:url,data:this.data.data}))
    // this._store.dispatch(venderemailverfiy({data:{"gstin":this.data.gstin,"email":this.data.email}}))
  }
  emailcheck(){
    //console.log(this.data)
    const url = Constants.VerifyMobile+this.otp+"/"+this.data.Number+"/"+this.data.data.gstin
    //console.log(url)
    this._store.dispatch(VerifyMobile({url:url,data:this.data.data}))
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
  }
}
