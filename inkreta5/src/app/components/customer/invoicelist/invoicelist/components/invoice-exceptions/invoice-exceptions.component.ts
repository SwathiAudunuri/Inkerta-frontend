import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { custInvoiceListDetailsInitialvalues } from '../../../Actions/invoicelistdetails.actions';
import { InvoiceList } from '../../../models/invoicelist.model';
import { getcustomerExceptionsinvoicelist, getcustomerinvoicelist } from '../../../Selectors/invoice.selector';
import {cloneDeep} from 'lodash';
import { ExceptionServiceload } from './exceptions.service';
import { getcustomerExceptionInvoiceList, getExceptionInvoiceListInitialValue } from '../../../Actions/Exceptioninvoicelist.action';
import { Constants } from 'src/app/constants/constants';
import { switchMap } from 'rxjs/operators';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
@Component({
  selector: 'app-invoice-exceptions',
  templateUrl: './invoice-exceptions.component.html',
  styleUrls: ['./invoice-exceptions.component.css']
})
export class InvoiceExceptionsComponent implements OnInit {
  invoice_details: any;
  document_ref_id: any;
  row_index: any;
  InvoiceNo: any;
  invoicelistdetails: any;
  defaultdetails: any;
  mess: string="";
  dummy: any;
  dumyinvoicelist: any;
  service: any;
  service1: any;
  constructor(private _router: Router,private store:Store,private exception:ExceptionServiceload,public unpaid:UnpaidService) { }
  row:any
  id:any
  by:any
  querydescription:any
  raisedon:any
  searchKey:string=""
  @Input() noofrows:any=9;
  @Input() tablewidth:any;
  @Output() respond :EventEmitter<any>=new EventEmitter()
  @Output() response :EventEmitter<any>=new EventEmitter()
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:any
  @Input() filterbyVendor:any;
  @Output() details = new EventEmitter()
  @Output() public childEvent = new EventEmitter()
  @Output() public index = new EventEmitter()
  page:any = 1;
  pageSize:number =8;
  @Input() public search:any;
  invoicelist:any;
  temp:Array<InvoiceList>=[]
  loading:any;
  nameToggle: any=1;
  icon:any= [];
  // mainArraydesc: any = [];
  // amountToggle: any = false;
  ngAfterViewInit() {
    // conslo
  }
   ngOnInit(){
    this.icon["INR"] = "currency_rupee";
    this.icon["USD"] = "attach_money";
     this.store.dispatch(getExceptionInvoiceListInitialValue())
    this.store.dispatch(custInvoiceListDetailsInitialvalues())
    this.unpaid.tab=0
    this.unpaid.changetab.next(null)
    this.unpaid.invoicedetails.next(null)
    this.unpaid.loadhistory.next(null)
    this.unpaid.loadattachments.next(null)
    this.unpaid.loadpdf.next(null)
    this.unpaid.loadquery.next(null)

    this.unpaid.status.next(null)
    this.exception.loadexception.next(true)
    var tab =["Details","Attachments","Invoice Document","Invoice History","NEW"]
    // this.tabs.emit(tab)
    this.unpaid.tabs=tab

    this.fetchRecords()
    this.document_ref_id = this.defaultdetails
  }
  fetchRecords(){
    // this.exception.loadexception.subscribe(l=>//console.warn(l))


    this.service1 = this.exception.loadexception.pipe(switchMap(_=>{
      this.store.dispatch(getcustomerExceptionInvoiceList({url : Constants.ExceptionInvoiceList}))


      return this.store.select(getcustomerExceptionsinvoicelist)}
    )) 

    // this.store.select(getcustomerExceptionsinvoicelist).subscribe(data=>{
   this.service =  this.service1.subscribe((data:any)=>{
     this.loading=data.loading
     //console.log(data.exceptions)
     if(data.exceptions){
      //console.log(data.exceptions.invoices.results)
      if(data.exceptions.invoices.results.length>0){
        this.invoicelist=data.exceptions.invoices.results
        if(this.invoicelist){
          this.invoicelistdetails =data.exceptions.invoices.results
          this.unpaid.external.next(this.invoicelist[0].is_external)
          this.defaultdetails = this.invoicelist[0].document_ref_id
          this.invoicelist=this.invoicelist
          this.dummy=this.invoicelist
          
          this.dumyinvoicelist = this.invoicelist
          this.document_ref_id = this.defaultdetails
          this.unpaid.ref=this.defaultdetails
          this.unpaid.tab = 0
          this.unpaid.fetchforinvoice.next(this.defaultdetails)
          if(!this.invoicelist[0].is_external){

             
              // this.unpaid.fetchforinvoice.next(this.defaultdetails)

              this.unpaid.loadhistory.next(this.defaultdetails)
              this.unpaid.loadattachments.next(this.defaultdetails)
              this.unpaid.invoicedetails.next(this.defaultdetails)
              this.unpaid.loadpdf.next(this.defaultdetails)
              this.unpaid.loadquery.next(this.defaultdetails)
              this.unpaid.loadqrcode.next(this.defaultdetails)
              this.unpaid.loadcomments.next(this.defaultdetails)
              this.unpaid.status.next(this.invoicelist[0].invoice_status)
                  //console.log(this.defaultdetails)
              

              this.temp=this.invoicelist    
              this.filter()
            }
            else{
              this.unpaid.ref=this.invoicelist[0].document_ref_id
              this.document_ref_id = this.invoicelist[0].document_ref_id
              this.unpaid.externalinvoicedetails.next(this.invoicelist[0].document_ref_id)
           
              this.unpaid.loadhistory.next(this.defaultdetails)
              this.unpaid.loadattachments.next(this.defaultdetails)
              // this.unpaid.invoicedetails.next(this.defaultdetails)
              this.unpaid.loadpdf.next(this.defaultdetails)
              this.unpaid.loadquery.next(this.defaultdetails)
              this.unpaid.loadqrcode.next(this.defaultdetails)
              this.unpaid.loadcomments.next(this.defaultdetails)
              this.unpaid.status.next(this.invoicelist[0].invoice_status)
            
            }
            // this.unpaid.loadattachments.next(this.defaultdetails)

        }
      }
      else{
        this.unpaid.status.next("error")
      }
    }
  })
}
  displayedColumns!: string[]; 
  dataSource:any

  applyFilter(){
    // //console.log(this.searchKey)
    this.dataSource.filter= this.searchKey.trim().toLowerCase()

    }
    ngOnChanges()	{
      this.filter()
    }
    filter(){
      if(this.search && this.invoicelistdetails){
        this.page =1
          this.invoicelistdetails=this.dumyinvoicelist.filter((e:any) =>  (e.company_name+e.invoicenum+e.total_invoice_value+e.invoiceduedate+e.invoicedate).includes(this.search));
        // //console.log(this.invoicelistdetails)
        if(this.invoicelistdetails.length === 0){
          this.mess="No Data Found"
        }
        else{
          this.mess=""
        }
      }
      else if(this.search === ""){
        this.invoicelistdetails = this.dummy
      }

    }
  opensidenav(){
    this.childEvent.emit(true)
  }

  invoicelistClick(value:any,index:any){
    this.unpaid.external.next(value.is_external)
    if(!value.is_external){
      //console.log("reg")
      this.unpaid.ref=(value.document_ref_id)
      this.unpaid.loadhistory.next(value.document_ref_id)
      this.unpaid.loadattachments.next(value.document_ref_id)
      this.unpaid.invoicedetails.next(value.document_ref_id)
      this.unpaid.loadpdf.next(value.document_ref_id)
      this.unpaid.loadquery.next(value.document_ref_id)
      this.unpaid.loadqrcode.next(value.document_ref_id)
      this.unpaid.loadcomments.next(value.document_ref_id)
      this.unpaid.status.next(value.invoice_status)
    }
    else{
      this.unpaid.ref=(value.document_ref_id)
      //console.log("external")
      this.unpaid.invoicedetails.next(null)

      this.unpaid.externalinvoicedetails.next(value.document_ref_id)

      this.unpaid.loadattachments.next(value.document_ref_id)


      this.unpaid.loadhistory.next(value.document_ref_id)
      // this.unpaid.loadattachments.next(value.document_ref_id)
      // this.unpaid.invoicedetails.next(value.document_ref_id)
      this.unpaid.loadpdf.next(value.document_ref_id)
      this.unpaid.loadquery.next(value.document_ref_id)
      this.unpaid.loadqrcode.next(value.document_ref_id)
      this.unpaid.loadcomments.next(value.document_ref_id)
      this.unpaid.status.next(value.invoice_status)
    }
    this.unpaid.fetchforinvoice.next(value.document_ref_id)
    this.invoice_details = value
    this.document_ref_id = value.document_ref_id
    this.InvoiceNo=this.row.invoicenum
    this.row_index = index
    // this.unpaid.detailstab.setValue(0)
    this.details.emit(value)
    this.index.emit(index)
   
  }
  mainArraydesc: any = [];
  amountToggle: number = 1;
  // nameToggle = 1;
  dateToggle: number = 1
  dueDateToggle:number = 1
  statusToggle:number = 1
  onSort() {
    
    this.mainArraydesc = []
    this.nameToggle = 1;
    this.dateToggle = 1
    this.dueDateToggle = 1
    this.statusToggle=1;
    if(this.amountToggle < 3){
    this.amountToggle = this.amountToggle + 1;
    }
    else if(this.amountToggle === 3){
      this.amountToggle = this.amountToggle - 1;
    }
    const clonedData = cloneDeep(this.invoicelist);
    clonedData.sort(function (a: any, b: any) {
      return a.total_invoice_value - b.total_invoice_value
    });
    if( this.amountToggle === 2){
      this.invoicelist = clonedData
    }
    else if(this.amountToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.invoicelist = this.mainArraydesc
    }
  }
  Sortname(){
    this.mainArraydesc = []
    this.dateToggle = 1
    this.nameToggle = 1;
    this.dueDateToggle = 1
    this.statusToggle=1;
    if(this.nameToggle < 3){
    this.nameToggle = this.nameToggle + 1;
    }
    else if(this.nameToggle === 3){
      this.nameToggle = this.nameToggle - 1;
    }
    const clonedData = cloneDeep(this.invoicelist);
    clonedData.sort(function (a: any, b: any) {
      return a.company_name - b.company_name
    });
    if( this.nameToggle === 2){
      this.invoicelist = clonedData
    }
    else if(this.nameToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.invoicelist = this.mainArraydesc
    }
  }
  dateSort() {
    this.mainArraydesc = []
    this.amountToggle = 1;
    this.nameToggle = 1;
    this.dueDateToggle = 1;
    this.statusToggle=1;
    if(this.dateToggle < 3){
      this.dateToggle = this.dateToggle + 1;
      }
      else if(this.dateToggle === 3){
        this.dateToggle = this.dateToggle - 1;
      }
    const clonedData = cloneDeep(this.invoicelist);
    clonedData.sort(function (a: any, b: any) {
      return <any>new Date(a.invoicedate) - <any>new Date(b.invoicedate);
    });
    if( this.dateToggle === 2){
      this.invoicelist = clonedData
    }
    else if(this.dateToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.invoicelist = this.mainArraydesc
    }
  }
  dueDateSort() {
    this.mainArraydesc = []
    this.amountToggle = 1;
    this.nameToggle = 1;
    this.dateToggle = 1
    this.statusToggle=1;
    if(this.dueDateToggle < 3){
      this.dueDateToggle = this.dueDateToggle + 1;
      }
      else if(this.dueDateToggle === 3){
        this.dueDateToggle = this.dueDateToggle - 1;
      }
    const clonedData = cloneDeep(this.invoicelist);
    clonedData.sort(function (a: any, b: any) {
      return <any>new Date(a.invoiceduedate) - <any>new Date(b.invoiceduedate);
    });
    if( this.dueDateToggle === 2){
      this.invoicelist = clonedData
    }
    else if(this.dueDateToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.invoicelist = this.mainArraydesc
    }
  }
  statusSort() {
    this.mainArraydesc = []
    this.amountToggle = 1;
    this.dateToggle = 1
    this.dueDateToggle = 1

    if(this.statusToggle < 3){
      this.statusToggle = this.statusToggle + 1;
      }
      else if(this.statusToggle === 3){
        this.statusToggle = this.statusToggle - 1;
      }

    const clonedData = cloneDeep(this.invoicelist);
    clonedData.sort(function (a: any, b: any) {
      return <any>new Date(a.invoiceduedate) - <any>new Date(b.invoiceduedate);
    });

    if( this.statusToggle === 2){
      this.invoicelist = clonedData
    }
    else if(this.statusToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.invoicelist = this.mainArraydesc
    }
  }
  ngOnDestroy() {
    
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }
}
