import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getcustomerInvoiceListHistory, getcustomerInvoiceListHistoryInitialValues } from '../../../Actions/history.actions';
import { getHistoryState } from '../../../Selectors/dashboard.selector';

@Component({
  selector: 'app-invoice-history',
  templateUrl: './invoice-history.component.html',
  styleUrls: ['./invoice-history.component.css']
})
export class InvoiceHistoryComponent implements OnInit {
  loading:any=false
  invoicelistdetails: any;
  status: boolean=false;
  constructor(private store:Store, @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,public dialogRef: MatDialogRef<InvoiceHistoryComponent>,) { 
    //console.log(data)
  }

  ngOnInit() {
    this.store.dispatch(getcustomerInvoiceListHistoryInitialValues())
    if(this.data){
    if (this.data?.is_external) {
      var url = Constants.ExternalCustInvoiceServiceHistory + this.data?.document_ref_id
      this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
    }
    else {
      var url = Constants.CustInvoiceServiceHistory + this.data?.document_ref_id
      this.store.dispatch(getcustomerInvoiceListHistory({ url: url }))
    }
  }

    this.store.select(getHistoryState).subscribe((data)=>{
      this.loading = data.loading
      if (data) {

        if (data?.history) {
          if (data?.history?.hasError) {

          }
          else {
            // this.previewsDoc_ref_id = data.doc_refid

            if (data?.history?.results) {
              //console.log(data?.history?.results?.length)
              if (data?.history?.results?.length === 0) {
                this.status = false

              }
              else {
                this.status = true
                this.invoicelistdetails = data?.history?.results
 
              }
            }
          }
        }

      }

    })
  }
  close(){
    this.dialogRef.close();
  }

}
