import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { getERPData, getERPDatanull } from '../../../Actions/postERP.action';
import { getErp } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-post-into-erp',
  templateUrl: './post-into-erp.component.html',
  styleUrls: ['./post-into-erp.component.css']
})
export class PostIntoErpComponent implements OnInit {
  loading:any = true;
  service: any;
  errormess: any;
  status: boolean=true;
  resp_doc_number:any=null;
  resp_message:any=null
  constructor(public dialogRef: MatDialogRef<PostIntoErpComponent>,public unpaid:UnpaidService,public store:Store) { }

  ngOnInit() {
    this.store.dispatch(getERPDatanull())
    this.unpaid.loaderp.next(true)
    this.getdata()
  }
  getdata(){
    // this.service =this.unpaid.loadqrcode.subscribe((ref)=>{
      
    //     this.store.dispatch(getcustomerInvoiceListQrCode({doc_refid:ref}))
    //     this.loadqrcode.next(true)
      
    // })
  
    // this.loadqrcode.subscribe(()=>{
    //   this.fetchdata()
    // })
    
    var geterp= this.unpaid.loaderp.pipe(switchMap(_=>{
      this.store.dispatch(getERPData({doc_refid:this.unpaid.ref,data:[]}))

      return this.store.select(getErp)
    })) 
    this.service = geterp.subscribe((data:any) => {
    
      this.loading = data.loading
        if(data.result){
          //console.log("printed")
          if(data.result.hasError){
            this.errormess = data.result.errors.errorMessage
            this.status = false
            //console.log(data)
          }
          else{
            this.resp_doc_number=data.result.results.resp_doc_number
            this.resp_message=data.result.results.resp_message

             //console.log(data)
          }
        }
    });
  }
  close(){
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.service.unsubscribe()
  }
}
