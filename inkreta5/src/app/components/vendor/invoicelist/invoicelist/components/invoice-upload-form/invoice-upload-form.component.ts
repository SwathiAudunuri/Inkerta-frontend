import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceUploadFormNoComponent } from '../invoice-upload-form-no/invoice-upload-form-no.component';
import {InvoiceUploadFormYesComponent} from '../invoice-upload-form-yes/invoice-upload-form-yes.component'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { InvoiceUploadService } from './invoice-upload-form.service';
import { Store } from '@ngrx/store';
import { postExternalInvoiceInitialvalues } from '../../../Actions/externalInvoiceUpload.actions';
import { getPatnerInitialValue } from '../../../Actions/patnerdetails.actions';

@Component({
  selector: 'app-invoice-upload-form',
  templateUrl: './invoice-upload-form.component.html',
  styleUrls: ['./invoice-upload-form.component.css']
})
export class InvoiceUploadFormComponent implements OnInit {
  registered:any;
  constructor(private store:Store,public dialogRef: MatDialogRef<InvoiceUploadFormComponent>,private dialog:MatDialog,private service:InvoiceUploadService) { }
  faSearch:any =faSearch
  ngOnInit(): void {
    this.service.email.next(null)
    this.service.recepient.next(null)
    this.store.dispatch(postExternalInvoiceInitialvalues())
    this.store.dispatch(getPatnerInitialValue())
  }
  submit(){
    if(this.registered === 'Yes'){
      //console.log(this.registered)
      const dialogRef = this.dialog.open(InvoiceUploadFormYesComponent,{disableClose: true,panelClass: 'custom-update-dialog-container'});
    }
    else if(this.registered === 'No'){
      //console.log(this.registered)
      const dialogRef = this.dialog.open(InvoiceUploadFormNoComponent,
        {disableClose: true,panelClass: 'custom-update-dialog-container',data: { "patnerdata": null}});
    }
    this.close()
  }
  close(){
    this.dialogRef.close();
  }
}
