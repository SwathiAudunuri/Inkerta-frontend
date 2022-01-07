import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { postInvoice, postInvoiceInitialvalues } from '../../../Actions/invoiceUpload';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-upload-form-yes',
  templateUrl: './invoice-upload-form-yes.component.html',
  styleUrls: ['./invoice-upload-form-yes.component.css']
})
export class InvoiceUploadFormYesComponent implements OnInit {
  model!: NgbDateStruct;
  ELEMENT_DATA:any=[]
  displayedColumns: string[] = ['delete','item_no', 'item_name', 'price', 'quantity','total'];
  dataSource = this.ELEMENT_DATA;
  @ViewChild(MatTable)
  table!: MatTable<any>;
  constructor(public dialogRef: MatDialogRef<InvoiceUploadFormYesComponent>,private dialog:MatDialog,private _formBuilder:FormBuilder,private store:Store) { }
  // invoice_form:any = this._formBuilder.group({
  //   invoiceNo:[''],
  //   invoiceDtae:[''],
  //   terms:[''],
  //   dueDate:[''],
  //   refereneNo:[''],
  //   currency:[''],
    
  //   quantity:[0],
  //   amount:[0],
  //   cgst:[0],
  //   sgst:[0],
  //   igst:[0],
  //   subTotal:[0],
  //   assessableValue:[0],
  //   total:[0],
  //   cessvalue:[0],
  //   statecessvalue:[0],
  //   irn:[0],

  //   fromName:[''],
  //   fromEmail:[''],
  //   fromMobile:[''],
  //   fromGSTIN:[''],
  //   fromaddress:[''],

  //   toName:[''],
  //   toEmail:[''],
  //   toMobile:[''],
  //   toGSTIN:[''],
  //   toaddress:[''],

  // })
  ngOnInit() {
    this.store.dispatch(postInvoiceInitialvalues())
  }
  add_row(){
    //console.log(this.ELEMENT_DATA)
    this.ELEMENT_DATA.push({item_no:"",item_name:"",price:"",quantity:"",total:""})
    this.table.renderRows();
  }
  delete_row(index:any){
    this.ELEMENT_DATA.splice(index,1);
    this.table.renderRows();
    //console.log(this.ELEMENT_DATA)
    // this.support_src.splice(index,1);
    // this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  close(){
    this.dialogRef.close();
  }
  submit(){
    // //console.log(this.invoice_form)
    // const data = [
    //   {
    //      "actionDetails": {
    //         "action_code": "Submit",
    //         "action_name": "001",
    //         "source": "portal"
    //      },
    //      "invoiceDetails": {
    //         "supply_type_code": "B2B",
    //         "reverse_charge": false,
    //         "ecom_gstin": this.invoice_form.value.toGSTIN,
    //         "igst_on_intra": false,
    //         "invoice_type_code": "INV",
    //         "invoicenum": this.invoice_form.value.invoiceNo,
    //         "invoicedate": this.invoice_form.value.invoiceDtae,
    //         "sgstvalue": this.invoice_form.value.sgst,
    //         "cgstvalue": this.invoice_form.value.cgst,
    //         "igstvalue": this.invoice_form.value.igst,
    //         "cessvalue": this.invoice_form.value.cessvalue,
    //         "statecessvalue": this.invoice_form.value.statecessvalue,
    //         "discount":0,
    //         "other_charges": 0,
    //         "roundoff": 0,
    //         "total_invoice_value": this.invoice_form.value.amount,
    //         "irn":this.invoice_form.value.irn,
    //         "invoice_currency_code": this.invoice_form.value.currency,
    //         "customer_partner_id": null,
    //         "vendor_recipient_code": null,
    //         "supplier_note": "",
    //         "tax_scheme": "GST",
    //         "total_assessable_value": this.invoice_form.value.assessableValue,
    //         "total_invoice_value_fc": "",
    //         "customer_recipient_code": "000088"
    //      },
    //      "invoiceSupplierBuyerDetails": {
    //       "billing_gstin": this.invoice_form.value.fromGSTIN,
    //       "billing_legal_name": this.invoice_form.value.fromName,
    //       "billing_trade_name": "",
    //       "billing_address1": this.invoice_form.value.fromaddress,
    //       "billing_address2": "",
    //       "billing_location": "",
    //       "billing_pincode": 0,
    //       "billing_state": "",
    //       "billing_phone": this.invoice_form.value.fromMobile,
    //       "billing_email": this.invoice_form.value.fromEmail,
    //       "supplier_gstin":this.invoice_form.value.toGSTIN,
    //       "supplier_legal_name":this.invoice_form.value.toName,
    //       "supplier_trading_name":"",
    //       "supplier_address1":this.invoice_form.value.toaddress,
    //       "supplier_address2":"",
    //       "supplier_location":"",
    //       "supplier_pincode": 0,
    //       "supplier_state": 0,
    //       "supplier_phone": this.invoice_form.value.toMobile,
    //       "supplier_email":this.invoice_form.value.toEmail
    //       },
    //      "invoiceDispatchShiptoDetails": {
    //         "dispatch_company_name": this.invoice_form.value.fromName,
    //         "dispatch_address1": this.invoice_form.value.fromaddress,
    //         "dispatch_address2": "",
    //         "dispatch_location": "",
    //         "dispatch_pincode":"",
    //         "shippingto_gstin":this.invoice_form.value.toGSTIN,
    //         "shippingto_legal_name": "",
    //         "shippingto_trade_name": "",
    //         "shippingto_address1": this.invoice_form.value.toaddress,
    //         "shippingto_address2": "",
    //         "shippingto_location": "",
    //         "shippingto_pincode": ""
    //      },
    //      "invoiceSellerPaymentDetails": {
    //         "creditdays": this.invoice_form.value.terms,
    //         "modeofpayment": "500033 ",
    //         "payment_instruction": "500033 ",
    //         "financial_institution_branch": "500033 ",
    //         "payee_financial_account": "500033 ",
    //         "credit_transfer": "500033 ",
    //         "direct_debit": "500033 ",
    //         "payment_due": "500033 ",
    //         "payment_terms": "500033 ",
    //         "paid_amount": "500033 ",
    //         "payee_name": "500033 "
    //      },
    //      "invoiceEwayBillDetails": {
    //         "transporter_id":"",
    //         "transportername": "",
    //         "transmode": "",
    //         "transdistance": "",
    //         "transdocno": "",
    //         "transdocdate":"",
    //         "vehicleno": "",
    //         "vehicle_type": ""
    //      },
    //      "invoiceReferenceDetails": {
    //         "po_ref_num": this.invoice_form.value.refereneNo
    //      },
    //      "lineItemDetails":[],
    //      "invoiceAttachmentDetails": [
    //         {
    //            "doc_type": "Invoice",
    //            "doc_name": "invoice.pdf",
    //            "doc_size": 5000,
    //            "mime_type": "application/pdf",
    //            "doc_id": "",
    //            "folder_id": "",
    //            "base64": ""
    //         }
    //      ]
    //   }
    // ]

    // this.store.dispatch(postInvoice({postdata:data}))

  }
}