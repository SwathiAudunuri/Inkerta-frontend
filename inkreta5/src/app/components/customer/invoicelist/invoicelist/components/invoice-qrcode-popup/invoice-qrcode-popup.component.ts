import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import { LoadingService } from 'src/app/loading/loading.service';
import { getcustomerInvoiceListQrCode } from '../../../Actions/invoicelistQrcode.actions';
import { getcustomerQrinvoicelist } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { imgBase64 } from './imagebase64';

@Component({
  selector: 'app-invoice-qrcode-popup',
  templateUrl: './invoice-qrcode-popup.component.html',
  styleUrls: ['./invoice-qrcode-popup.component.css']
})
export class InvoiceQrcodePopupComponent implements OnInit {
  // imgdata:any="../../../../../../../assets/qrcode.JPG"
  imgdata:any;
  base64: string | undefined;
  qr_SellerGstin: any;
  qr_BuyerGstin: any;
  qr_DocType: any;
  qr_DocNo: any;
  qr_TotInvVal: any;
  qr_DocDt: any;
  qr_Irn: any;

  inv_SellerGstin: any;
  inv_BuyerGstin: any;
  inv_DocType: any;
  inv_DocNo: any;
  inv_TotInvVal: any;
  inv_DocDt: any;
  inv_Irn: any;
  ref:any;
  status: boolean=true;
  loading$ = this.loader.loading$;
  errormess: any="";
  qrverifiedstatus: any = false;
  qrloading: any;
  value: any;
  service: any;
  constructor(public dialogRef: MatDialogRef<InvoiceQrcodePopupComponent>,public _http:HttpClient,private store:Store,private unpaid:UnpaidService,private cdr: ChangeDetectorRef,public loader:LoadingService) { 
    this.ref=this.unpaid.ref
    
  }
  loadqrcode= new BehaviorSubject<boolean>(false)
  ngOnInit(): void {
    this.unpaid.loadqrcode.next(true)
    // this.store.dispatch(getcustomerInvoiceListQrCode({doc_refid :  this.unpaid.ref}))
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
    
    var getcustomerinvoicelists= this.unpaid.loadqrcode.pipe(switchMap(_=>{
      this.store.dispatch(getcustomerInvoiceListQrCode({doc_refid:this.unpaid.ref}))

      return this.store.select(getcustomerQrinvoicelist)
    })) 
    this.service = getcustomerinvoicelists.subscribe((data:any) => {
    
      this.qrloading = data.loading
      // if(data.qrcode){
        if(data.qrcode){
          //console.log("printed")
          if(data.qrcode.hasError){
            this.errormess = data.qrcode.errors.errorMessage
            this.status = false
          }
          else{
            if(data.qrcode.results.isqrveified){
                this.status = true
                this.base64 = "data:text;base64,"+data.qrcode.results.qrcodebase64
                this.qr_SellerGstin = data.qrcode.results.qrcodedata.SellerGstin
                this.qr_BuyerGstin = data.qrcode.results.qrcodedata.BuyerGstin
                this.qr_DocType = data.qrcode.results.qrcodedata.DocTyp
                this.qr_DocNo = data.qrcode.results.qrcodedata.DocNo
                this.qr_TotInvVal = data.qrcode.results.qrcodedata.TotInvVal
                this.qr_DocDt = data.qrcode.results.qrcodedata.DocDt
                this.qr_Irn = data.qrcode.results.qrcodedata.Irn

                this.inv_SellerGstin = data.qrcode.results.invoicemetadata.SellerGstin
                this.inv_BuyerGstin = data.qrcode.results.invoicemetadata.BuyerGstin
                this.inv_DocType = data.qrcode.results.invoicemetadata.DocTyp
                this.inv_DocNo = data.qrcode.results.invoicemetadata.DocNo
                this.inv_TotInvVal = data.qrcode.results.invoicemetadata.TotInvVal
                this.inv_DocDt = data.qrcode.results.invoicemetadata.DocDt
                this.inv_Irn = data.qrcode.results.invoicemetadata.Irn

                
                if(data.qrcode.results.qrverifiedstatus === "failed"){
                  this.qrverifiedstatus = false
                  this.errormess = data.qrcode.results.reasonforfailure
                }
                else if(data.qrcode.results.qrverifiedstatus === "success"){
                  this.qrverifiedstatus = true
                  this.errormess = ""
                }
            }
            else{
              // //console.log(data.reasonforfailure)
              this.errormess = data.qrcode.results.reasonforfailure
              this.status = false

              this.qr_SellerGstin = ""
              this.qr_BuyerGstin = ""
              this.qr_DocType = ""
              this.qr_DocNo = ""
              this.qr_TotInvVal = ""
              this.qr_DocDt = ""
              this.qr_Irn = ""

              this.inv_SellerGstin = ""
              this.inv_BuyerGstin = ""
              this.inv_DocType = ""
              this.inv_DocNo = ""
              this.inv_TotInvVal = ""
              this.inv_DocDt = ""
              this.inv_Irn = ""
            }
          }
        }
      // }
    });
  }
  fetchdata(){
    // this.store.select(getcustomerQrinvoicelist).subscribe((data:any) => {
    //   getcustomerinvoicelists.subscribe((data:any) => {
    //   // //console.log(data)
    //   this.qrloading = data.loading
    //   // if(data.qrcode){
    //     if(data.qrcode.hasError){
    //       this.errormess = data.qrcode.errors.errorMessage
    //       this.status = false
    //     }
    //     else{
    //       if(data.qrcode.results.isqrveified){
    //           this.status = true
    //           this.base64 = "data:text;base64,"+data.qrcode.results.qrcodebase64
    //           this.qr_SellerGstin = data.qrcode.results.qrcodedata.SellerGstin
    //           this.qr_BuyerGstin = data.qrcode.results.qrcodedata.BuyerGstin
    //           this.qr_DocType = data.qrcode.results.qrcodedata.DocTyp
    //           this.qr_DocNo = data.qrcode.results.qrcodedata.DocNo
    //           this.qr_TotInvVal = data.qrcode.results.qrcodedata.TotInvVal
    //           this.qr_DocDt = data.qrcode.results.qrcodedata.DocDt
    //           this.qr_Irn = data.qrcode.results.qrcodedata.Irn

    //           this.inv_SellerGstin = data.qrcode.results.invoicemetadata.SellerGstin
    //           this.inv_BuyerGstin = data.qrcode.results.invoicemetadata.BuyerGstin
    //           this.inv_DocType = data.qrcode.results.invoicemetadata.DocTyp
    //           this.inv_DocNo = data.qrcode.results.invoicemetadata.DocNo
    //           this.inv_TotInvVal = data.qrcode.results.invoicemetadata.TotInvVal
    //           this.inv_DocDt = data.qrcode.results.invoicemetadata.DocDt
    //           this.inv_Irn = data.qrcode.results.invoicemetadata.Irn

              
    //           if(data.qrcode.results.qrverifiedstatus === "failed"){
    //             this.qrverifiedstatus = false
    //             this.errormess = data.qrcode.results.reasonforfailure
    //           }
    //           else if(data.qrcode.results.qrverifiedstatus === "success"){
    //             this.qrverifiedstatus = true
    //             this.errormess = ""
    //           }
    //       }
    //       else{
    //         // //console.log(data.reasonforfailure)
    //         this.errormess = data.qrcode.results.reasonforfailure
    //         this.status = false

    //         this.qr_SellerGstin = ""
    //         this.qr_BuyerGstin = ""
    //         this.qr_DocType = ""
    //         this.qr_DocNo = ""
    //         this.qr_TotInvVal = ""
    //         this.qr_DocDt = ""
    //         this.qr_Irn = ""

    //         this.inv_SellerGstin = ""
    //         this.inv_BuyerGstin = ""
    //         this.inv_DocType = ""
    //         this.inv_DocNo = ""
    //         this.inv_TotInvVal = ""
    //         this.inv_DocDt = ""
    //         this.inv_Irn = ""
    //       }
    //     }
    //   // }
    // });
  }
  // ngAfterContentInit(){

    // ngAfterContentChecked(){
    // this.store.select(getcustomerQrinvoicelist).subscribe((data:any) => {
    //   //console.log(data)
    //   if(data.isqrveified){
    //       this.status = true
    //       this.base64 = "data:text;base64,"+data.qrcodebase64
    //       this.qr_SellerGstin = data.qrcodedata.SellerGstin
    //       this.qr_BuyerGstin = data.qrcodedata.BuyerGstin
    //       this.qr_DocType = data.qrcodedata.DocTyp
    //       this.qr_DocNo = data.qrcodedata.DocNo
    //       this.qr_TotInvVal = data.qrcodedata.TotInvVal
    //       this.qr_DocDt = data.qrcodedata.DocDt
    //       this.qr_Irn = data.qrcodedata.Irn

    //       this.inv_SellerGstin = data.invoicemetadata.SellerGstin
    //       this.inv_BuyerGstin = data.invoicemetadata.BuyerGstin
    //       this.inv_DocType = data.invoicemetadata.DocTyp
    //       this.inv_DocNo = data.invoicemetadata.DocNo
    //       this.inv_TotInvVal = data.invoicemetadata.TotInvVal
    //       this.inv_DocDt = data.invoicemetadata.DocDt
    //       this.inv_Irn = data.invoicemetadata.Irn
    //       if(data.qrverifiedstatus === "failed"){
    //         this.qrverifiedstatus = false
    //         this.errormess = data.reasonforfailure
    //       }
    //       else if(data.qrverifiedstatus === "success"){
    //         this.qrverifiedstatus = true
    //         this.errormess = ""
    //       }
    //   }
    //   else{
    //     // //console.log(data.reasonforfailure)
    //     this.errormess = data.reasonforfailure
    //     this.status = false

    //     this.qr_SellerGstin = ""
    //     this.qr_BuyerGstin = ""
    //     this.qr_DocType = ""
    //     this.qr_DocNo = ""
    //     this.qr_TotInvVal = ""
    //     this.qr_DocDt = ""
    //     this.qr_Irn = ""

    //     this.inv_SellerGstin = ""
    //     this.inv_BuyerGstin = ""
    //     this.inv_DocType = ""
    //     this.inv_DocNo = ""
    //     this.inv_TotInvVal = ""
    //     this.inv_DocDt = ""
    //     this.inv_Irn = ""
    //   }
    // });
    // this.cdr.detectChanges()
  // }
  ngOnDestroy() {
    this.destorydata()
    // this.unpaid.loadqrcode.unsubscribe()
    // this.loadqrcode.unsubscribe()
    this.service.unsubscribe()
    
  }
  destorydata(){
    this.qr_SellerGstin = null
    this.qr_BuyerGstin = null
    this.qr_DocType = null
    this.qr_DocNo =null
    this.qr_TotInvVal = null
    this.qr_DocDt =null
    this.qr_Irn =null

    this.inv_SellerGstin = null
    this.inv_BuyerGstin = null
    this.inv_DocType = null
    this.inv_DocNo =null
    this.inv_TotInvVal = null
    this.inv_DocDt = null
    this.inv_Irn = null
  }
  
  close(){
    this.dialogRef.close();
  }
  base64_to_img(base64:any) {
    fetch(base64)
    .then(res => res.blob())
    .then(blob => {
    const file = new File([blob], "qrcode",{ type: "JPG" })
    // this.blob.emit(blob)
    if(blob){
      var reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = (event:any)=>{
        this.imgdata = event.target.result
      }
    }
   })
  }
  

}
