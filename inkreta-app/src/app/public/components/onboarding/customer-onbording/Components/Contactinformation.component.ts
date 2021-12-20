import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { externalValidators } from '../externalvaldators';
import { emailverfiy } from '../store/Actions';
import { getemailotpresult, getgstin, getresult, getstatus1, stepperState } from '../store/States';
import { DialogComponent } from './dialog.component';
@Component({
  selector: 'app-Contactinformation',
  templateUrl: './Contactinformation.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./component.css']
})
export class Contact_informationComponent implements OnInit {

  public object={
      "errors": null,
      "hasError": false,
      "results": {
          "ctjCd": "ZJ0502",
          "tradeName": "Ernst & Young LLP",
          "gstin": "07AAEFE1763C1ZU",
          "cxdt": "",
          "registrationDate": "01/07/2017",
          "ctj": "RANGE - 67",
          "companyName": "ERNST & YOUNG LLP",
          "status": "Active",
          "lastUpdateOn": "05/03/2021",
          "dty": "Regular",
          "stj": "Ward 208",
          "stjCd": "DL115",
          "frequencyType": null,
          "ctb": "Limited Liability Partnership",
          "address": {
              "statecode": "Delhi",
              "location": "Asset Area 11,Hospitality District",
              "blockName": "",
              "district": "New Delhi",
              "buildingNumber": "3rd and 6th Floor",
              "pincode": "110037",
              "lg": null,
              "lt": null,
              "street": "Worldmark 1",
              "city": "",
              "floorNumber": "3rd and 6th Floor"
          },
          "natureOfBusiness": [
              "Service Provision",
              "Recipient of Goods or Services"
          ]
      },
      "timestamp": "13-07-2021 05:21:01"
  }
  @Input()
  public Additional_Details:any;
  @Input()
  status1: any;
  mess: any;
  tick: boolean=true;
  constructor(public dialog:MatDialog , public _store : Store<{stepper:stepperState}>,public _myFB : FormBuilder) { }
  result:any;
  tradename:any;
  ctb:any;
  statecode : any;
  pincode:any;
  natureOfBusiness:any;
  address : any;
  gstin:any;
  email:any;
  cont_info = this._myFB.group({
    mobileNumber:['',[Validators.required,externalValidators(/^[0-9\b]+$/)]],
    email: ['',[Validators.required,externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]]
  })
  @Output() public childEvent = new EventEmitter();
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',height:'190px',
      data: {"gstin":this.Additional_Details.value.gstin,"email":this.Additional_Details.value.email,"status1":this.status1}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.status1=result
      setTimeout(()=>{
        // console.log(this.mess.results)
        this.mess=this.mess.results
        if(this.mess.errors == null){
          this.status1 = false
          this.tick=false
          // console.log(this.status1)
          this.Additional_Details.patchValue({
            verifiedMail:true
          })
          // this.Additional_Details.value.verifiedMail = true
          this.childEvent.emit(this.status1)
          // console.log(this.Additional_Details.value.verifiedMail)
          // this.childEvent.emit(this.Additional_Details.value.verifiedMail)
        }
        else{
        this.status1 = false
        }
        }
        ,3000)
    });
  }
  ngOnInit() {
    
}
  ngAfterViewChecked(){
    // console.log(this.Additional_Details.value)
    this._store.select(getemailotpresult).subscribe(mess =>{
        this.mess = mess;
      })
        this._store.select(getgstin).subscribe(gstin =>{
          this.gstin = gstin;
        })
        this._store.select(getresult).subscribe(result =>{
          this.result = result;
        })
       
        this.tradename = this.result.results.tradeName
        this.ctb = this.result.results.ctb
        this.statecode = this.result.results.statecode
        this.pincode = this.result.results.pincode
        this.natureOfBusiness = this.result.results.natureOfBusiness
        this.address = this.result.results.buildingNumber + this.result.results.street +"," + this.result.results.blockName+"," + this.result.results.location + "," +this.result.results.district +"," + this.result.results.pincode

        this.Additional_Details.patchValue({
          address:this.result.results.buildingNumber + this.result.results.street +"," + this.result.results.blockName+"," + this.result.results.location + "," +this.result.results.district +"," + this.result.results.pincode
        })
  }
  emaildispatch(){
    console.log(this.cont_info.value.email)
    this._store.dispatch(emailverfiy({data:{"gstin":this.Additional_Details.value.gstin,"email":this.Additional_Details.value.email}}))
  }
  get f(){
    return this.Additional_Details.controls
  }

}
