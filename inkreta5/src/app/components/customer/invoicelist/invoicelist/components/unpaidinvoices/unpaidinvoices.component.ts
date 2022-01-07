import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import {NgbModal, NgbModalConfig, NgbDate, NgbDateParserFormatter, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getcustomerInvoiceList, getcustomerInvoiceListInitialValue } from '../../../Actions/invoicelist.action'; 
import { MatDialog } from '@angular/material/dialog';
import { InvoiceList } from '../../../models/invoicelist.model';
import { getcustomerinvoicelist } from '../../../Selectors/invoice.selector';
import { UnpaidService } from './unpaid.service';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import {cloneDeep} from 'lodash';
import { of } from 'rxjs/internal/observable/of';
import { custInvoiceListDetailsInitialvalues } from '../../../Actions/invoicelistdetails.actions';
import { AnyFn } from '@ngrx/store/src/selector';


@Component({
  selector: 'app-unpaidinvoices',
  templateUrl: './unpaidinvoices.component.html',
  styleUrls: ['./unpaidinvoices.component.css']
})

export class UnpaidinvoicesComponent implements AfterViewInit {

  @Input() noofrows:any;
  @Input() readOnly:any=false;
  @Input() tablewidth:any;
  @Input() filterbyVendor:any;
  @Output() public childEvent = new EventEmitter()
  @Output() public details = new EventEmitter()
  @Output() public index = new EventEmitter()
  @Output() public tabs = new EventEmitter()
  // @Output() public selected = new EventEmitter()
  @Input() public search:any;
  hoveredDate: NgbDate | null = null;
  Action=["Update status","Raise Query","History"]
  fromDate: NgbDate | null=null;
  toDate: NgbDate | null=null;
  public InvoiceNo:any="";
  showFiller = false;
  row_index:any;
  pdf: any;
  onload: any;
  defaultdetails: any="";
  invoice_details: any;
  document_ref_id: any="";
  page:number=1;
  pageSize:number = 8;
  dummy: any;
  mess: string="";
  // loading:any=false
  temp1:any;
  filterinvoicelist: any;
  service: any;
  service1: any;
  loading:any;
  icon:any= [];
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store,private unpaid:UnpaidService,private changeDetectorRefs: ChangeDetectorRef) { 
    this.icon["INR"] = "currency_rupee";
    this.icon["USD"] = "attach_money";
  }
  closeResult = '';
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string=""
  getcustomerinvoicelists:any
  
  // value="INR"
  // icon = "currency_rupee"

  


  ngAfterViewInit() {
    
    if(this.InvoiceNo === ""){
      this.onload = true
    }
  }
  ngOnChanges()	{
    this.filter()
    
  }
  filter(){
    if(this.search && this.invoicelist){
      this.page =1
        this.invoicelist=this.filterinvoicelist.filter((e:any) =>  (e.company_name+e.invoicenum+e.total_invoice_value+e.invoiceduedate+e.invoicedate).includes(this.search));
      if(this.invoicelist.length === 0){
        this.mess="No Data Found"
      }
      else{
        this.mess=""
      }
    }
    else if(this.search === ""){
      this.invoicelist = this.dummy
    }
  }
  ngOnInit(): void {
    this.store.dispatch(getcustomerInvoiceListInitialValue())
    this.store.dispatch(custInvoiceListDetailsInitialvalues())

    this.unpaid.tab=0
    this.unpaid.changetab.next(null)
    this.unpaid.invoicedetails.next(null)
    this.unpaid.loadhistory.next(null)
    this.unpaid.loadattachments.next(null)
    this.unpaid.loadpdf.next(null)
    this.unpaid.loadquery.next(null)

    this.unpaid.status.next(null)

    this.unpaid.externalinvoicedetails.next(null)
    // this.unpaid.tab=0
    // this.unpaid.changetab.next(null)
    // this.unpaid.invoicedetails.next(null)
    // this.unpaid.loadhistory.next(null)
    // this.unpaid.loadattachments.next(null)
    // this.unpaid.loadpdf.next(null)
    // this.unpaid.loadquery.next(null)

    var tab =["Details","Attachments","Invoice Document","Invoice History"]
    // this.tabs.emit(tab)
    this.unpaid.tabs=tab
    // this.unpaid.status="unpaid"
    // this.unpaid.status1.next("unpaid")
this.unpaid.loadunpaid.next(true)
    this.getAllRec()
     this.document_ref_id = this.defaultdetails
  } 
  invoicelist:any;
  temp:Array<InvoiceList>=[]
  displayedColumns:any
  getAllRec(){
    this.service1= this.unpaid.loadunpaid.subscribe((demo)=>{
      if(demo){
      this.store.dispatch(getcustomerInvoiceList({url : Constants.UnpaidInvoiceList}))
      // return this.store.select(getcustomerinvoicelist)
      }
      // else{
      //   return of(null);
      // }
    })
    this.service = this.store.select(getcustomerinvoicelist).subscribe ((data:any)=>{
      this.loading=data.loading
      //console.log(data)
      if(data.unpaid){
        if(data?.unpaid?.invoices?.hasError){

        }
        else{
          //console.log(data.unpaid.invoices.results)
          //console.log("unpaid")
          if(data?.unpaid?.invoices?.results?.length>0){
            
          this.invoicelist=data.unpaid.invoices.results
          if(this.invoicelist){
            this.unpaid.external.next(this.invoicelist[0].is_external)
            this.defaultdetails = this.invoicelist[0].document_ref_id
            this.invoicelist=this.invoicelist
            this.dummy=this.invoicelist
            this.filterinvoicelist = this.invoicelist
            this.document_ref_id = this.defaultdetails
            this.unpaid.ref=this.defaultdetails
            this.unpaid.tab = 0
            this.temp1=data.unpaid.invoices.results
            this.unpaid.invoicelistdetails=this.temp1        
            this.unpaid.loading=true
            this.unpaid.fetchforinvoice.next(this.defaultdetails)
            if(!this.invoicelist[0].is_external){

               
                

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
            this.unpaid.external.next(false)
          }
        }
          

        
      }
      
    })
    // this.store.subscribe(data=>{
    //   this.temp1=data
    //     this.unpaid.invoicelistdetails=this.temp1.customerinvoicedetails.results         
    //     this.unpaid.loading=true
    // })
  }
  invoicedetails(row:any,index:any){
    this.InvoiceNo=this.row.invoicenum
    this.row_index = index
    this.details.emit(row)
    this.index.emit(index)
  }
applyFilter(){
  }
  tr_highlight(element:any){
    this.InvoiceNo=element.invoicenum 
    
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
  nameToggle = 1;
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
    // this.store.dispatch(custInvoiceListDetailsInitialvalues())
    // this.unpaid.tab = null
    // this.unpaid.changetab.next(null)
    // this.unpaid.invoicedetails.next(null)
    this.service.unsubscribe()
    this.service1.unsubscribe()
    
  }
}