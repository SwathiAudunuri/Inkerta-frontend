import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { postInvoice, postInvoiceInitialvalues } from '../../../Actions/invoiceUpload';
import { MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { InvoiceUploadService } from '../invoice-upload-form/invoice-upload-form.service';
import { DatePipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { postExternalInvoice, postExternalInvoiceInitialvalues } from '../../../Actions/externalInvoiceUpload.actions';
import { getpatnerState, postexternalinvoiceState } from '../../../Selectors/invoice.selector';
import { getPatner } from '../../../Actions/patnerdetails.actions';
import { Constants } from 'src/app/constants/constants';
import { LoginState } from 'src/app/selectors/login.selectors';

@Component({
  selector: 'app-invoice-upload-form-no',
  templateUrl: './invoice-upload-form-no.component.html',
  styleUrls: ['./invoice-upload-form-no.component.css']
})
export class InvoiceUploadFormNoComponent implements OnInit {
  model!: NgbDateStruct;
  ELEMENT_DATA: any = []
  displayedColumns: string[] = ['delete', 'item_no', 'item_name', 'price', 'quantity', 'total'];
  dataSource = this.ELEMENT_DATA;
  @ViewChild(MatTable)
  table!: MatTable<any>;
  emaildata: any = null;
  recipient: any;
  id2: any = "";
  pdf_src: any=null;
  size: any;
  base64: any;
  support_src: any = [];
  subtotal: any;
  service1: any;
  loading: any=false;
  mess: any;
  error: any;
  show = true;
  service2: any;
  loading1: any=false;
  patnerdata: any;
  service3: any;
  recepient: any = [];
  cc:any=[]
  bcc:any=[];
  array: any=[];
  recipient_partner_id: any;

  constructor(public datepipe: DatePipe, public dialogRef: MatDialogRef<InvoiceUploadFormNoComponent>, private dialog: MatDialog, private _formBuilder: FormBuilder, private store: Store, private service: InvoiceUploadService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      //console.log(this.data)
     
   }
   invoice_form: any = this._formBuilder.group({
    invoiceNo: ['',[Validators.required]],
    invoiceDate: ['',[Validators.required]],
    terms: ['',[Validators.required]],
    dueDate: ['',[Validators.required]],
    refereneNo: ['',[Validators.required]],
    currency: ['',[Validators.required]],

    taxrate: [0,[Validators.required]],
    total: [0,[Validators.required]],
    subTotal: [0,[Validators.required]],
    taxamount: [0,[Validators.required]],

    fromName: [''],
    fromEmail: [''],
    fromMobile: [''],
    fromGSTIN: [''],
    fromaddress: [''],

    toName: [''],
    toEmail: [[]],
    toMobile: [''],
    toGSTIN: [''],
    toaddress: [''],

    item_details: [[]],
    invoiceAttachmentDetails: [[]]


  })
  ngOnInit() {
    this.service3 = this.store.select(LoginState).subscribe((data:any)=>{
      //console.log(data)
      if(this.data){
        if(data?.result){
          if(data?.result?.hasError){
  
          }
          else{
            //console.log(data?.result?.results?.email)
            this.cc.push(data?.result?.results?.email);
          }
        }
      }
     
    })
    if(this.data?.patnerdata){
      this.invoice_form.patchValue({
        terms: this.data?.patnerdata?.paymentTerms,
        currency: this.data?.patnerdata?.reportingCurrency,

        toName: this.data?.patnerdata?.companyName,
        toEmail: this.data?.patnerdata?.email,
       toMobile: this.data?.patnerdata?.primaryPhoneNumber,
        toGSTIN: this.data?.patnerdata?.gstin,
        toaddress: this.data?.patnerdata?.partnerAddress,
      })
      this.recipient_partner_id =this.data?.patnerdata?.partnerId
      // this.recipient = this.data?.patnerdata?.email
      this.recepient.push(this.data?.patnerdata?.email)
      this.service.existmail.next(this.data?.patnerdata?.email)

      this.array.push({ccAddresses:this.cc,bccAddresses:this.bcc,toAddresses:this.recepient})
      // //console.log(this.array)
      this.service.email.next(this.array)
      this.service.recepient.next(this.recepient.toString())
    }
    else{
      this.service.existmail.next(null)
      this.service.recepient.next(null)
      this.service.email.next(null)
    }
    this.store.dispatch(getPatner({url:Constants.PatnerDetails}))

    this.service2 = this.store.select(getpatnerState).subscribe((data:any)=>{
      this.loading1 = data.loading
      //console.log(data)
      if(data.details){
        if(data?.details?.hasError){

        }
        else{
          this.patnerdata = data?.details?.results
          //console.log("no error")
          const address = data?.details?.results[0]?.bno+"," +data?.details?.results[0]?.lgnm+","+data?.details?.results[0]?.bnm+","+data?.details?.results[0]?.loc+","+data?.details?.results[0]?.st+","+data?.details?.results[0]?.pncd
          this.invoice_form.patchValue({
            fromName: data?.details?.results[0]?.lgnm,
            fromGSTIN: data?.details?.results[0]?.gstin,
            fromaddress: address,
            // fromEmail: data?.details?.results[0].lgnm,
            // fromMobile: data?.details?.results[0].lgnm,
          })
          

        }
      }
    })

    this.service.email.subscribe((data) => {
      if (data) {
        this.emaildata = data
        this.invoice_form.patchValue({
          toEmail: data
        })
        
      }
    })
    this.service.recepient.subscribe((data) => {
      if (data) {
        this.recipient = data
      }
    })

    this.store.dispatch(postExternalInvoiceInitialvalues())
    this.service1 = this.store.select(postexternalinvoiceState).subscribe((data:any)=>{
      this.loading = data.loading
      if(data.result){
        if(data.result.hasError){
          this.error = data?.result?.errors?.errorMessage
          this.show = false
        }
        else{
          this.show = false
          this.mess = "Invoice Uploaded Sucessfully "+data?.result?.results?.doc_Ref_No
        }
        //console.log(data)
      }
    })
  }
  date_change() {
    if (this.invoice_form.value.terms === '30' || this.invoice_form.value.terms === '60' || this.invoice_form.value.terms === '90') {
      const date = this.add_daete(parseInt(this.invoice_form.value.terms), this.invoice_form.value.invoiceDate)
      //console.log(date)
      this.invoice_form.patchValue({
        dueDate: this.datepipe.transform(date, 'yyyy-MM-dd')
      })
    }
    else if (this.invoice_form.value.terms === 'custom') {
      this.invoice_form.patchValue({
        dueDate: ''
      })
    }
    else if (this.invoice_form.value.terms === 'due on receipt') {
      this.invoice_form.patchValue({
        dueDate: this.invoice_form.value.invoiceDate,
        // terms : 0
      })
    }

  }
  add_daete(days: any, date1: any) {
    var date = new Date(date1);
    date.setDate(date.getDate() + days);
    return date;
  }
  sub_days(dat1: any, dat2: any) {
    var date1:any = new Date(dat1);
    var date2:any = new Date(dat2);
    var diffTime:any = Math.abs(date2 - date1);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // //console.log(diffTime + " milliseconds");
    // //console.log(diffDays + " days");
    return diffDays;
  }
  total_change() {
    // this.subtotal = 0
    var total = 0
    //console.log("changed")
    // for (var i = 0; i < this.ELEMENT_DATA.length; i++) {
    //   const value = this.ELEMENT_DATA[i].price * this.ELEMENT_DATA[i].quantity
    //   this.subtotal = total + value
    //   total = this.subtotal
    // }
    const taxamt = this.percentage(this.invoice_form.value.taxrate, this.invoice_form.value.subTotal)
    const totalamt = parseInt(this.invoice_form.value.subTotal) + parseInt(taxamt)
    this.invoice_form.patchValue({
      // subTotal: parseInt(this.subtotal.toFixed(2)),
      taxamount: parseInt(taxamt).toFixed(2),
      total: totalamt.toFixed(2)
    })
  }
  percentage(partialValue: any, totalValue: any) {
    return ((partialValue / 100) * totalValue).toFixed(2);
  }
  add_row() {
    //console.log(this.ELEMENT_DATA)
    this.ELEMENT_DATA.push({ item_no: "", item_name: "", price: "", quantity: "", total: "" })
    this.table.renderRows();
  }
  delete_row(index: any) {
    this.ELEMENT_DATA.splice(index, 1);
    this.table.renderRows();
    //console.log(this.ELEMENT_DATA)
    this.total_change()
    // this.support_src.splice(index,1);
    // this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  email() {
    const dialogRef = this.dialog.open(EmailComponent, { disableClose: true });
  }
  close() {
    this.dialogRef.close();
  }
  upload_pdf(event: any) {
    this.id2 = event.target.files[0].name
    this.size = event.target.files[0].size
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.pdf_src = event.target.result.split("data:application/pdf;base64,").pop()
        // //console.log(this.pdf_src)
      }
    }
  }
  delete_pdf() {
    this.id2 = ""
    this.pdf_src = null
  }
  upload_support(event: any) {
    //console.log(event)
    this.support_src = []
    //console.log(event.target.files.length)
    for (var i = 0; i < event.target.files.length; i++) {
      const name = event.target.files[i].name
      const type = event.target.files[i].type
      const size = event.target.files[i].size
      if (event.target.files) {
        //console.log(type)
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event: any) => {
          if (type === "application/pdf") {
            var base64_pdf = event.target.result.split("data:application/pdf;base64,").pop()
            this.support_src.push({ doc_type: "Supporting", doc_name: name, doc_size: size, mime_type: type, doc_id: '', folder_id: '', base64: base64_pdf })
          }
          else if (type === "application/msword") {
            var base64_csv = event.target.result.split("data:application/msword;base64,").pop()
            this.support_src.push({ doc_type: "Supporting", doc_name: name, doc_size: size, mime_type: type, doc_id: '', folder_id: '', base64: base64_csv })
          }
        }
      }
    }
    //console.log(this.support_src)
  }
  delete_row_supporting(index: any) {
    // this.ELEMENT_DATA.splice(index,1);
    this.support_src.splice(index, 1);
    // //console.log(this.ELEMENT_DATA)
    //console.log(this.support_src)
  }
  get f() {
    return this.invoice_form.controls
  }
  submit() {
    if (this.invoice_form.value.terms === 'custom') {
      var terms = this.sub_days(this.invoice_form.value.invoiceDate,this.invoice_form.value.dueDate)
      this.invoice_form.patchValue({
        terms : terms
      })
    }
    else if (this.invoice_form.value.terms === 'due on receipt') {
      this.invoice_form.patchValue({
        // dueDate: this.invoice_form.value.invoiceDate,
        terms : 0
      })
    }
    // const date = this.sub_days(this.invoice_form.value.dueDate,this.invoice_form.value.invoiceDate)
    // //console.log(date)
    const attachmentdetails: any = [
      {
        "doc_type": "Invoice",
        "doc_name": this.id2,
        "doc_size": this.size,
        "mime_type": "application/pdf",
        "doc_id": "",
        "folder_id": "",
        "base64": this.pdf_src
      }
    ]
    for (var i = 0; i < this.support_src.length; i++) {
      attachmentdetails.push(this.support_src[i])
    }
    this.invoice_form.patchValue({
      item_details: this.ELEMENT_DATA,
      invoiceAttachmentDetails: attachmentdetails
    })
    // const partner_address  = this.invoice_form.value.fromName + this.invoice_form.value.fromaddress
    var postdata: any = {
      "actionDetails": {
        "action_code": "001",
        "action_name": "Submit",
        "source": "portal"
      },

      "invoiceDetails": {
        "supply_type_code": "B2B",
        "reverse_charge": false,
        "recipient_company_name": this.invoice_form.value.toName,
        "recipient_gstin": this.invoice_form.value.toGSTIN,
        "recipient_address": this.invoice_form.value.toaddress,
        "invoice_type_code": "INV",
        "invoicenum": this.invoice_form.value.invoiceNo,
        "invoice_reference_no": this.invoice_form.value.refereneNo,
        "invoicedate": this.invoice_form.value.invoiceDate,
        "subtotal": this.invoice_form.value.subTotal,
        "taxrate": this.invoice_form.value.taxrate,
        "taxamount": this.invoice_form.value.taxamount,
        "total_invoice_value": this.invoice_form.value.total,
        "irn": "123456795",
        "invoice_currency_code": this.invoice_form.value.currency,
        "tax_scheme": "GST",
        "creditdays": this.invoice_form.value.terms,
        "supplier_note": "This is test",
        "transaction_type": "receivable",
        "doc_source": "webportal",
        "partner_company_name" : this.invoice_form.value.fromName,
        "partner_gstin": this.invoice_form.value.fromGSTIN,
        "partner_address":this.invoice_form.value.fromaddress,
        "recipient_partner_id":this.recipient_partner_id
      },
      "mailAddresses":this.invoice_form.value.toEmail[0],
      "attachmentDetails": this.invoice_form.value.invoiceAttachmentDetails
    }
    //console.log(this.invoice_form)
    //console.log(postdata)

    this.store.dispatch(postExternalInvoice({postdata:postdata}))
  }
  ngOnDestroy(){
    this.store.dispatch(postExternalInvoiceInitialvalues())
    this.pdf_src=null
    this.service2.unsubscribe()
    this.service1.unsubscribe()
  }
}
