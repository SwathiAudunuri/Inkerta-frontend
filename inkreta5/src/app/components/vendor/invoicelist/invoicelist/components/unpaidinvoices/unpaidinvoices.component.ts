import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalConfig, NgbDate, NgbDateParserFormatter, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { QuerydialogComponent } from '../querydialog/querydialog.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { HistoryComponent } from '..//history/history.component';
import { InvoiceList } from '../../../models/invoicelist.model';
import { getinvoicelist } from '../../../Selectors/invoice.selector';
import { UnpaidService } from './unpaid.service';
import { cloneDeep } from 'lodash';
import { Constants } from 'src/app/constants/constants'; 
import { getInvoiceListaction, getInvoiceListInitialValue } from '../../../Actions/invoicelist.action'; 
import { switchMap } from 'rxjs/operators';
import { InvoiceListDetailsInitialvalues } from '../../../Actions/invoicelistdetails.actions';
import { of } from 'rxjs/internal/observable/of';


@Component({
  selector: 'app-unpaidinvoices',
  templateUrl: './unpaidinvoices.component.html',
  styleUrls: ['./unpaidinvoices.component.css']
})



export class UnpaidinvoicesComponent implements AfterViewInit {
  [x: string]: any;

  @Input() noofrows:any;
  @Input() readOnly:any=false;
  @Input() tablewidth:any;
  @Input() filterbyVendor:any;
  // @Input() index:any;
  @Output() public childEvent = new EventEmitter()
  @Output() public details = new EventEmitter()
  @Output() public index = new EventEmitter()
  @Output() public invoicesidenav = new EventEmitter()
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
  pageSize:number=8
  dummy: any;
  mess: string="";
  loading:any=false
  temp1:any;
  filterinvoicelist: any;
  service1: any;
  service: any;
  statusToggle: number=1;
  // index: any;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store,private unpaid:UnpaidService) { 
   
  }
  closeResult = '';
  dataSource:any =''
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string=""
  previous_doc_ref_id:any=null;
 
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
      // this.invoicelist=this.invoicelist.filter((product: any) =>
        // product.company_name.toLocaleLowerCase().indexOf(this.search) !== -1);invoicenum
        this.invoicelist=this.filterinvoicelist.filter((e:any) =>  (e.company_name+e.invoicenum+e.total_invoice_value+e.invoiceduedate+e.invoicedate).includes(this.search));
        // this.invoicelist=this.invoicelist.filter((e:any) =>
        //   (e.company_name.includes(this.search) ||e.invoicenum.includes(this.search))
        // );
        // .sort((a,b) => a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 :0);
      // //console.log(this.invoicelist)
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
    // I210331000491
    this.store.dispatch(getInvoiceListInitialValue())
    this.store.dispatch(InvoiceListDetailsInitialvalues())

    this.unpaid.tab=0
    this.unpaid.changetab.next(null)
    this.unpaid.invoicedetails.next(null)
    this.unpaid.loadhistory.next(null)
    this.unpaid.loadattachments.next(null)
    this.unpaid.loadpdf.next(null)
    this.unpaid.loadquery.next(null)

    this.unpaid.status.next(null)

    this.unpaid.loadunpaid.next(true)
    
    this.unpaid.externalinvoicedetails.next(null)
    this.getAllRec()
     this.document_ref_id = this.defaultdetails
    
    this.unpaid.previous_doc_ref_id.subscribe((data:any)=>{
      this.previous_doc_ref_id = data
    })
   
  } 
  previous(data:any){
    
      this.previous_data = data
      if(data){
        console.log(data,"privous")
        var gridlength = this.invoicelist.length
        var page;
        var index;
        for(var i=0;i<gridlength;i++){
          if(this.invoicelist[i].document_ref_id === data){
            console.log(i,"i value");
            index=i
            page = Math.floor(index / 8) +1
            console.log(page,"page_number")
          }
        }
        if(index){
          this.invoicelistClick(this.invoicelist[index],index)
        }
        else{
          this.previous_doc_ref_id = null
        }
        if(page){
          this.page=page
        }
      }
    // })
  }
  invoicelist:any;
  temp:Array<InvoiceList>=[]
  displayedColumns:any
  getAllRec(){
    this.service1= this.unpaid.loadunpaid.subscribe((demo)=>{
      if(demo){
        this.store.dispatch(getInvoiceListaction({url : Constants.VenderUpaidInvoiceList}))
        }
    })

    this.service = this.store.select(getinvoicelist).subscribe ((data:any)=>{
      this.loading=data.loading
      if(data.unpaid){
          if(data.unpaid.invoices.results.length>0){
            
          this.invoicelist=data.unpaid.invoices.results
          if(this.previous_doc_ref_id){
            this.previous(this.previous_doc_ref_id)
          }
          else{
            if(this.invoicelist){
              
              this.unpaid.external.next(this.invoicelist[0].is_external)
              this.defaultdetails = this.invoicelist[0].document_ref_id
              if(!this.invoicelist[0].is_external){
              
              this.invoicelist=this.invoicelist
              this.dummy=this.invoicelist
              this.filterinvoicelist = this.invoicelist
              this.document_ref_id = this.defaultdetails
              this.unpaid.ref=this.defaultdetails

              this.temp1=data.unpaid.invoices.results
              this.unpaid.invoicelistdetails=this.temp1      
              this.unpaid.loading=true
              
              //console.log(this.invoicelist[0].is_external)
              // if(!this.invoicelist[0].is_external){
                this.unpaid.invoicedetails.next(this.defaultdetails)
              //  }
              //  else{
              //    //console.log("not giving")
              //    this.unpaid.invoicedetails.next(null)
              //  }


              // this.unpaid.loadhistory.next(value.document_ref_id)
        this.unpaid.loadattachments.next(this.defaultdetails)
        // this.unpaid.invoicedetails.next(value.document_ref_id)
        // this.unpaid.loadpdf.next(value.document_ref_id)
        // this.unpaid.loadquery.next(value.document_ref_id)
        // this.unpaid.loadqrcode.next(value.document_ref_id)
        this.unpaid.loadcomments.next(this.defaultdetails)
        // this.unpaid.status.next(value.invoice_status)


              this.unpaid.loadhistory.next(this.defaultdetails)
              
              this.unpaid.loadpdf.next(this.defaultdetails)
              this.unpaid.loadquery.next(this.defaultdetails)
              this.unpaid.loadqrcode.next(this.defaultdetails)
              this.unpaid.status.next(this.invoicelist[0].invoice_status)
                  //console.log(this.defaultdetails)
              this.unpaid.tab = 0

                  this.temp=this.invoicelist    
                  this.filter()
              }
              else{
                this.unpaid.ref=this.invoicelist[0].document_ref_id
                this.document_ref_id = this.invoicelist[0].document_ref_id
                this.unpaid.externalinvoicedetails.next(this.invoicelist[0].document_ref_id)
                
                this.unpaid.loadhistory.next(this.defaultdetails)
                this.unpaid.loadattachments.next(this.defaultdetails)
                // this.unpaid.invoicedetails.next(value.document_ref_id)
                this.unpaid.loadpdf.next(this.defaultdetails)
                this.unpaid.loadquery.next(this.defaultdetails)
                this.unpaid.loadqrcode.next(this.defaultdetails)
                this.unpaid.loadcomments.next(this.defaultdetails)
                this.unpaid.status.next(this.defaultdetails)
              
              }
            }
          }
        }
        else{
          this.unpaid.status.next("error")
        }
        // this.unpaid.loadattachments.next(this.defaultdetails)
          

        
      }
      
    })

  }

  open(Raisequery:any,Updatestatus:any,item:any) {
    if(item==='Update status'){
    this.modalService.open(Updatestatus).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    if(item==='Raise Query'){
      this.modalService.open(Raisequery,{ size: 'xl' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  selection = new SelectionModel<InvoiceList>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: InvoiceList): string {
    if (!row) {
      
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.invoicenum + 1}`;
  }

  invoicedetails(row:any,index:any){
    this.InvoiceNo=this.row.invoicenum
    this.row_index = index
    // //console.log(row.document_ref_id)

    this.details.emit(row)
    this.index.emit(index)

  }
  editorconfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  openDialog(item:any,element:any) {
    if(item==='Update status'){
      // //console.log(element)
      const dialogRef = this.dialog.open(UpdatestatusComponent,{data:element});

    // dialogRef.afterClosed().subscribe(result => {
    //   //console.log(`Dialog result: ${result}`);
    // })
  };

    if(item==='Raise Query'){
    const dialogRef = this.dialog.open(QuerydialogComponent,{data: element });

    dialogRef.afterClosed().subscribe(result => {
      // //console.log(`Dialog result: ${result}`);
    });
    
  
  }
  if(item==='History'){
    const dialogRef = this.dialog.open(HistoryComponent,{panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      // //console.log(`Dialog result: ${result}`);
    });
  }
}
applyFilter(){
  // //console.log(this.searchKey)
  this.dataSource.filter= this.searchKey.trim().toLowerCase()
  
  }
  tr_highlight(element:any){
    this.InvoiceNo=element.invoicenum 
    
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  opensidenav(){
    this.childEvent.emit(true)
  }

  // invoicelistClick(value:any,index:any){
  //   // //console.log("running")
  //   this.invoice_details = value
  //   this.document_ref_id = value.document_ref_id

  //   this.InvoiceNo=this.row.invoicenum
  //   this.row_index = index
  //   // //console.log(value.document_ref_id)
  //   this.details.emit(value)
  //   this.index.emit(index)
  //   this.store.dispatch(getInvoiceListDetails({doc_refid : value.document_ref_id}))
  //   this.store.dispatch(getInvoiceListHistory({doc_refid : value.document_ref_id}))
  // }
  perviousnull(){
    this.unpaid.previous_doc_ref_id.next(null)
  }
  invoicelistClick(value:any,index:any){
    // this.unpaid.previous_doc_ref_id.next(null)

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
  // statusToggle:number = 1
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

}

