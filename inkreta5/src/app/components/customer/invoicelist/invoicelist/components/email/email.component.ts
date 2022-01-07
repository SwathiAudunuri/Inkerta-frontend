import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { InvoiceUploadService } from '../invoice-upload-form/invoice-upload-form.service';
import { Store } from '@ngrx/store';
import {LoginState} from '../../../../../../selectors/login.selectors'
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  recepient: any = [];
  cc:any=[]
  bcc:any=[];
  array: any=[];
  
  constructor(public store:Store,public dialogRef: MatDialogRef<EmailComponent>,private service:InvoiceUploadService) { }

  ngOnInit() {
    this.service.existmail.subscribe((data:any)=>{
      if(data){
        this.recepient.push(data)
      }
      else{
        this.recepient = []
      }
    })
    this.store.select(LoginState).subscribe((data:any)=>{
      //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          //console.log(data?.result?.results?.email)
          this.cc.push(data?.result?.results?.email);
        }
      }
    })
  }
  close(){
    this.dialogRef.close();
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.recepient.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.recepient.indexOf(fruit);

    if (index >= 0) {
      this.recepient.splice(index, 1);
    }
  }

  add_cc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.cc.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove_cc(fruit: any): void {
    const index = this.cc.indexOf(fruit);

    if (index >= 0) {
      this.cc.splice(index, 1);
    }
  }

  add_bcc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.bcc.push( value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove_bcc(fruit: any): void {
    const index = this.bcc.indexOf(fruit);

    if (index >= 0) {
      this.bcc.splice(index, 1);
    }
  }
  submit(){

    this.array.push({ccAddresses:this.cc,bccAddresses:this.bcc,toAddresses:this.recepient})
    // //console.log(this.array)
    this.service.email.next(this.array)
    this.service.recepient.next(this.recepient.toString())
    this.close()
  }
}
