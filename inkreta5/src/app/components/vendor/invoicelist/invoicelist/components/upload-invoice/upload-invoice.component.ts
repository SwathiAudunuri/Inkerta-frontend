import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { postInvoice, postInvoiceInitialvalues } from '../../../Actions/invoiceUpload';
import { postinvoicedoc } from '../../../Selectors/invoice.selector';
import * as XLSX from 'xlsx'
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

export interface PeriodicElement {
  MineType: string;
  DocumentName: string;
}
var ELEMENT_DATA: any = []

@Component({
  selector: 'app-upload-invoice',
  templateUrl: './upload-invoice.component.html',
  styleUrls: ['./upload-invoice.component.css']
})
export class UploadInvoiceComponent implements OnInit {
  array : any=[];
  name: any=[];
  data: any=[];
  additionaldata: any=[];
  
  id: any = [];
  id1 : any="";
  id2 : any="";
  dataSource  :any;
  csvRecords: any[] = [];
  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;
  pdf_src: any;
  upload_invoice_data : any;
  support_src: any = [];
  templateurl: any = "./assets/invoice_template/template1.xlsx";
  loading:boolean = false
  mess: string="";
  status: boolean=false;
  service: any;
  mess_status:boolean = false;
  constructor(private unpaid:UnpaidService,public dialogRef: MatDialogRef<UploadInvoiceComponent>,private ngxCsvParser: NgxCsvParser,public store:Store) { }
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['DocumentName', 'MineType' , 'Action'];
  ngOnInit() {
    this.store.dispatch(postInvoiceInitialvalues())
    this.service = this.store.select(postinvoicedoc).subscribe((data)=>{
      //console.log(data)
      this.loading = data.loading
      if(data.result){

        if(data.result.errors){
          this.status = true;
          this.mess_status = true;
          this.mess = data.result.errors.errorMessage
         
        }
        else{
          // doc_Ref_No
          this.status = true;
         
          if(data.result.results.invRespone[0].hasError){
            this.mess_status = true;
            this.mess = "some error is there while uploading your invoice"
            //console.log("error is there")
          }
          else{
            this.mess_status = false;
            this.mess ="Your Invoice "+data.result.results.invRespone[0].invoiceNumber+" with document ref id "+data.result.results.invRespone[0].doc_Ref_No +" Successfully uploaded"
            this.unpaid.loadunpaid.next(true)
          }
        }
      }
    })
  }
  upload_csv(event: any): void {
    this.id1 = event.target.files[0].name
      if(event.target.files){
        var reader = new FileReader()
        reader.readAsBinaryString(event.target.files[0])
        reader.onload = (event:any)=>{
          //console.log(event)
          let binarydata = event.target.result;
          let workbook = XLSX.read(binarydata,{type:'binary'})
          // //console.log(workbook)
          workbook.SheetNames.forEach(sheet =>{
           
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            // //console.log(data)
            // this.convert = JSON.stringify(data,undefined,4)
            // //console.log(this.convert)
            this.array.push(data)
            // //console.log(this.array)
         
          })
          //console.log(this.array)
          for(var i=0;i<this.array[0].length;i++){
            for(var j=0;j<this.array[1].length;j++){
              //console.log(this.array[0][i]['Seller_GSTIN_*'])
              // //console.log(this.array[1][j].name)
              if(this.array[0][i]['Document_Number_*'] === this.array[1][j]['Document_Number_*']){
                // this.array[0][i] = {...this.array[0][i],...this.array[1][j]}
                this.additionaldata.push(this.array[1][j])
  
              }
            }
          }
          //console.log(this.additionaldata)
          // //console.log(this.array)
          // for(var i=0;i<this.array[0].length;i++){
          //   this.name.push(this.array[0][i].EmailID)
          //   this.data.push(this.array[0][i])
          // }
          // for(var i=1;i<this.array.length;i++){
          //   //console.log(this.array[i])
          //   for(var j=0;j<this.array[i].length;j++){
          //     for(var k=0;k<this.name.length;k++){
          //       if(this.array[i][j].EmailID === this.name[k]){
          //         var objectC = {...this.data[k], ...this.array[i][j]};
          //         //console.log(objectC)
          //       }
          //     }
          //   }
          // }
        }
      }
    
    // const files = $event.srcElement.files;
    // this.id1 = $event.target.files[0].name
    // this.ngxCsvParser.parse(files[0], { header: false, delimiter: ',' })
    //   .pipe().subscribe((result: any) => {
    //     //console.log('Result', result);
    //     this.csvRecords = result;
    //   }, (error: NgxCSVParserError) => {
    //     //console.log('Error', error);
    //   }
    // );
  }
  delete_csv(){
    this.id1 = ""
  }
  upload_pdf(event:any){
    this.id2 = event.target.files[0].name
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.pdf_src = event.target.result.split("data:application/pdf;base64,").pop()
        //console.log(this.pdf_src)
      }
    }
  }
  delete_pdf(){
    this.id2 = ""
    this.pdf_src=""
  }
  upload_support(event:any){
    //console.log(event)
    this.id = []
    this.support_src=[]
    ELEMENT_DATA = []
    //console.log(event.target.files.length)
    for(var i=0;i<event.target.files.length;i++){
      const type = event.target.files[i].type
      this.id.push(event.target.files[i].name)
      ELEMENT_DATA.push({DocumentName : event.target.files[i].name,MineType: event.target.files[i].type})
      
      if(event.target.files){
        //console.log(type)
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event:any)=>{
          // this.support_src.push({base64:event.target.result,minetype:type})
          if(type === "application/pdf"){
            var base64_pdf = event.target.result.split("data:application/pdf;base64,").pop()
            this.support_src.push({base64:base64_pdf,minetype:type})
          }
          else if(type === "application/msword"){
            var base64_csv = event.target.result.split("data:application/msword;base64,").pop()
            this.support_src.push({base64:base64_csv,minetype:type})
          }
        }
      }
    }
    //console.log(this.id)
    //console.log(this.support_src)
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  delete_row(index:any){
    ELEMENT_DATA.splice(index,1);
    this.support_src.splice(index,1);
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  download_template(){
    saveAs(this.templateurl, "template.xlsx")
  }
  close(){
    this.dialogRef.close();
  }
  submit(action:any,actioncode:any){
    // //console.log(action)
    // //console.log(this.csvRecords[1][10]) 001 submit
    this.upload_invoice_data = [
      {
         "actionDetails": {
            "action_code": actioncode,
            "action_name": action,
            "source": "portal"
         },
         "invoiceDetails": {
            "supply_type_code": this.array[0][0]['Supply_Type_code_*'],
            "reverse_charge": this.array[0][0]['Reverse_Charge'],
            "ecom_gstin": this.array[0][0]['e-Comm_GSTIN'],
            "igst_on_intra": this.array[0][0]['Igst_On_Intra'],
            "invoice_type_code": this.array[0][0]['Document_Type_*'],
            "invoicenum": this.array[0][0]['Document_Number_*'],
            "invoicedate": this.array[0][0]['Document_Date_(DD/MM/YYYY)_*'],
            "sgstvalue": this.array[0][0]['Sgst_Amt'],
            "cgstvalue": this.array[0][0]['Cgst_Amt'],
            "igstvalue": this.array[0][0]['Igst_Amt'],
            "cessvalue": this.array[0][0]['Cess_Amt'],
            "statecessvalue": this.array[0][0]['State_Cess_Amt'],
            "discount": this.array[0][0]['Discount'],
            "other_charges": this.array[0][0]['Other_charges'],
            "roundoff": this.array[0][0]['Round_off'],
            "total_invoice_value": this.array[0][0]['Total_Invoice_value_*'],
            "irn": this.array[0][0]['IRN_Number'],
            "invoice_currency_code": this.array[0][0]['Currency'],
            "customer_partner_id": null,
            "vendor_recipient_code": null,
            "supplier_note": this.array[0][0]['Supplier_Note'],
            "tax_scheme": "GST",
            "total_assessable_value": this.array[0][0]['Total_Taxable_value_*'],
            "total_invoice_value_fc": "",
            "customer_recipient_code": "000088",
            "creditdays": this.array[0][0]['CreditDays'],
         },
         "invoiceSupplierBuyerDetails": {
          "billing_gstin": this.array[0][0]['Buyer_GSTIN_*'],
          "billing_legal_name": this.array[0][0]['Buyer_Legal_Name_*'],
          "billing_trade_name": this.array[0][0]['Buyer_Trade_Name_'],
          "billing_address1": this.array[0][0]['Buyer_Addr1_*'],
          "billing_address2": this.array[0][0]['Buyer_Addr2'],
          "billing_location": this.array[0][0]['Buyer_Location_*'],
          "billing_pincode": parseInt(this.array[0][0]['Buyer_Pin_Code']),
          "billing_state": this.array[0][0]['Buyer_State_*'],
          "billing_phone": this.array[0][0]['Buyer_Phone_Number'],
          "billing_email": this.array[0][0]['Buyer_Email_Id'],
          "supplier_gstin":this.array[0][0]['Seller_GSTIN_*'],
          "supplier_legal_name":this.array[0][0]['Legal_Name'],
          "supplier_trading_name":this.array[0][0]['Trade_Name'],
          "supplier_address1":this.array[0][0]['Seller_Address1'],
          "supplier_address2":this.array[0][0]['Seller_Address2'],
          "supplier_location":this.array[0][0]['Seller_Location'],
          "supplier_pincode": parseInt(this.array[0][0]['Pin_Code']),
          "supplier_state": parseInt(this.array[0][0]['State']),
          "supplier_phone": parseInt(this.array[0][0]['Phone_Number']),
          "supplier_email":this.array[0][0]['Email_ID']
          },
         "invoiceDispatchShiptoDetails": {
            "dispatch_company_name": this.array[0][0]['Dispatch_Name_'],
            "dispatch_address1": this.array[0][0]['Dispatch_Addr1_'],
            "dispatch_address2": this.array[0][0]['Dispatch_Addr2'],
            "dispatch_location": this.array[0][0]['Dispatch_Location_'],
            "dispatch_pincode": this.array[0][0]['Dispatch_Pin_Code_'],
            "shippingto_gstin": this.array[0][0]['Shipping_GSTIN_'],
            "shippingto_legal_name": this.array[0][0]['Shipping_Legal_Name_'],
            "shippingto_trade_name": this.array[0][0]['Shipping_Trade_Name_'],
            "shippingto_address1": this.array[0][0]['Shipping_Addr1_'],
            "shippingto_address2": this.array[0][0]['Shipping_Addr2'],
            "shippingto_location": this.array[0][0]['Shipping_Location_'],
            "shippingto_pincode": this.array[0][0]['Shipping_Pin_Code_']
         },
         "invoiceSellerPaymentDetails": {
            // "creditdays": this.array[0][0]['CreditDays'],
            "modeofpayment": "500033 ",
            "payment_instruction": "500033 ",
            "financial_institution_branch": "500033 ",
            "payee_financial_account": "500033 ",
            "credit_transfer": "500033 ",
            "direct_debit": "500033 ",
            "payment_due": "500033 ",
            "payment_terms": "500033 ",
            "paid_amount": "500033 ",
            "payee_name": "500033 "
         },
         "invoiceEwayBillDetails": {
            "transporter_id": this.array[0][0]['Trans_ID'],
            "transportername": this.array[0][0]['Trans_Name'],
            "transmode": this.array[0][0]['Trans_Mode_'],
            "transdistance": this.array[0][0]['Distance_'],
            "transdocno": this.array[0][0]['Trans_Doc_No.'],
            "transdocdate": this.array[0][0]['Trans_Doc_Date'],
            "vehicleno": this.array[0][0]['Vehicle_No.'],
            "vehicle_type": this.array[0][0]['Vehicle_Type']
         },
         "invoiceReferenceDetails": {
            "po_ref_num": this.array[0][0]['po_ref_num']
         },
         "lineItemDetails":[],
         "invoiceAttachmentDetails": [
            {
               "doc_type": "Invoice",
               "doc_name": "invoice.pdf",
               "doc_size": 5000,
               "mime_type": "application/pdf",
               "doc_id": "",
               "folder_id": "",
               "base64": this.pdf_src
            }
         ]
      }
    ]
    // //console.log(this.support_src)
    for(var i=0;i<this.support_src.length;i++){
      
      //console.log(this.support_src[i].minetype)
      if(this.support_src[i].minetype === "application/pdf"){
        var doc_name = "sample_PO"+(i+1)+".pdf"
        var data =  {
          "doc_type": "Supporting",
          "doc_name": doc_name,
          "doc_size": 5000,
          "mime_type": this.support_src[i].minetype,
          "doc_id": "",
          "folder_id": "",
          "base64": this.support_src[i].base64
        }
        this.upload_invoice_data[0].invoiceAttachmentDetails.push(data)
      }
      else if(this.support_src[i].minetype === "application/msword"){
        var doc_name = "sample_PO"+(i+1)+".doc"
        var data1 ={
          "doc_type": "Supporting",
          "doc_name": doc_name,
          "doc_size": 5000,
          "mime_type": this.support_src[i].minetype,
          "doc_id": "",
          "folder_id": "",
          "base64": this.support_src[i].base64
        }
        this.upload_invoice_data[0].invoiceAttachmentDetails.push(data1)
      }
    }
    for(var i=0;i<this.additionaldata.length;i++){
      // var inline={
      //   "barcode": null,
      //           "batch_expiry_date": null,
      //           "batch_name": null,
      //           "cgst_amt": 0.00,
      //           "comp_cess_amt_ad_valorem": 5.00,
      //           "comp_cess_amt_non_ad_valorem": 4949.94,
      //           "comp_cess_rate_ad_valorem": 999.990,
      //           "free_qty": null,
      //           "gross_amount": 99998.90,
      //           "gst_rate": 5.000,
      //           "hsn_code": "1001",
      //           "igst_amt": 0.00,
      //           "is_service": false,
      //           "item_description": "steel",
      //           "item_discount_amount": 999.99,
      //           "item_price": 999.999,
      //           "item_taxable_value": 98998.91,
      //           "item_total_amt": 136648.48,
      //           "other_charges_item_level": 999.99,
      //           "pre_tax_value": null,
      //           "quantity": 99.999,
      //           "sgst_utgst_amt": null,
      //           "id": 1455,
      //           "state_cess_amt_ad_valorem": null,
      //           "state_cess_amt_non_ad_valorem": null,
      //           "state_cess_rate_ad_valorem": null,
      //           "unit_of_measurement": null,
      //           "warranty_date": null,
      // }
      var inline={
        "item_description": this.additionaldata[i]['Product_Description'],
        "is_service": this.additionaldata[i]['Is_Service_*'],
        "hsn_code": this.additionaldata[i]['HSN_code_*'],
        "quantity": this.additionaldata[i]['Quantity'],
        "free_qty": this.additionaldata[i]['Free_Quantity'],
        "item_price": this.additionaldata[i]['Unit_Price_*'],
        "gross_amount": this.additionaldata[i]['Total_(Gross)_Amount_*'],
        "item_discount_amount": this.additionaldata[i]['Discount'],
        "pre_tax_value": this.additionaldata[i]['Pre_Tax_Value'],
        "item_taxable_value": this.additionaldata[i]['Assable_(Taxable)_value_*'],
        "gst_rate": this.additionaldata[i]['GST_Rate_(%)_*'],
        "igst_amt": this.additionaldata[i]['Igst_Amt(Rs)'],
        "cgst_amt": this.additionaldata[i]['Cgst_Amt_(Rs)'],
        "comp_cess_amt_ad_valorem": this.additionaldata[i]['Cess_Amt_Adval_(Rs)'],
        "comp_cess_amt_non_ad_valorem": this.additionaldata[i]['Cess_Non_Adval_Amt_(Rs)'],
        "comp_cess_rate_ad_valorem": this.additionaldata[i]['State_Cess_Rate_(%)'],
        "other_charges_item_level": this.additionaldata[i]['Other_Charges__'],
        "item_total_amt": this.additionaldata[i]['Item_Total_*']
      }
      this.upload_invoice_data[0].lineItemDetails.push(inline)
    }
    //console.log(this.upload_invoice_data)
    this.store.dispatch(postInvoice({postdata:this.upload_invoice_data}))
  }
  ngOnDestroy() {
    this.pdf_src=[]
    this.id = []
    this.support_src=[]
    this.upload_invoice_data =[]
    this.loading = false
    this.service.unsubscribe()
    this.store.dispatch(postInvoiceInitialvalues())
    localStorage.removeItem("uploadinvoice")
  }
}
