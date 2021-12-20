import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List } from 'immutable';
import {NgbModal, ModalDismissReasons, NgbModalConfig, NgbDate, NgbDateParserFormatter, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getInvoiceList } from '../../../Actions/invoicelist.action'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { QuerydialogComponent } from '../querydialog/querydialog.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { HistoryComponent } from '..//history/history.component';
import { ConditionalExpr } from '@angular/compiler';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  InvoiceNo: string;
  Date:string;
  VendorName: string;
  Amount: number;
  DueDate: string;
  StatusOfInv:string;
  Action:Array<any>;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {InvoiceNo : '15b81a05a5', Date: '12-1-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 50000,DueDate :'10-2-2021',StatusOfInv:'New',Action:["Update status","Raise Query","History"]},
  {InvoiceNo : '15b81a05a6', Date: '1-11-2021', VendorName: 'capgemini consultancy', Amount: 20000,DueDate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"]},
  {InvoiceNo : '15b81a05a7', Date: '12-10-2021', VendorName: 'Attra Company', Amount: 30000,DueDate :'10-11-2021',StatusOfInv:'New',Action:["Raise Query"] },
  {InvoiceNo : '15b81a05a8', Date: '12-9-2021', VendorName: 'tecnics integratrion limited', Amount: 150000,DueDate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {InvoiceNo : '15b81a05a9', Date: '12-8-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 35000,DueDate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},
  {InvoiceNo : '15b81a05a10', Date: '1-11-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 5000,DueDate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query"]},
  {InvoiceNo : '15b81a05a11', Date: '12-10-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 70000,DueDate :'10-11-2021',StatusOfInv:'Onhold',Action:["Raise Query"] },
  {InvoiceNo : '15b81a05a12', Date: '12-9-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 60000,DueDate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {InvoiceNo : '15b81a05a13', Date: '12-8-2021', VendorName: 'Doctor Reddys Laboratoraries', Amount: 35000,DueDate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},

];
@Component({
  selector: 'app-unpaidinvoices',
  templateUrl: './unpaidinvoices.component.html',
  styleUrls: ['./unpaidinvoices.component.css']
})



export class UnpaidinvoicesComponent implements AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:MatSort[]=[];

  @Input() noofrows:any;
  @Input() readOnly:any=false;
  @Input() tablewidth:any;
  @Input() filterbyVendor:any;
  // @Input() index:any;
  @Output() public childEvent = new EventEmitter()
  @Output() public details = new EventEmitter()
  @Output() public index = new EventEmitter()
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null=null;
  toDate: NgbDate | null=null;
  public InvoiceNo:any="";
  showFiller = false;
  row_index:any;
  // index: any;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store) { 
    config.backdrop = 'static';
    config.keyboard = true;
    config.centered= true
    config.backdrop=false
    config.modalDialogClass='model_content'
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

  }
  closeResult = '';
  dataSource:any =''
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string=""

  ngAfterViewInit() {
  this.dataSource.paginator=this.paginator
  this.dataSource.sort = this.sort;

  console.log(this.filterbyVendor)

  if(this.filterbyVendor!=undefined ){
    this.dataSource.filter= this.filterbyVendor.trim().toLowerCase()
  }
  }
  ngOnChanges()	{
    console.log(this.filterbyVendor)
      if(this.filterbyVendor!=undefined ){
    this.dataSource.filter= this.filterbyVendor.trim().toLowerCase()
  }

  }



  ngOnInit(): void {
    this.getAllRec()
  } 
 

  displayedColumns:any
  getAllRec(){
    this.store.dispatch(getInvoiceList())
  this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  console.log(this.dataSource)
    if(this.readOnly=='true'){
      this.displayedColumns = ['InvoiceNo', 'Date', 'VendorName', 'Amount','DueDate','StatusOfInv'];

    }
    else{
      this.displayedColumns =['select','InvoiceNo', 'Date', 'VendorName', 'Amount','DueDate','StatusOfInv','Action'];
    }
  //console.log(this.paginator)
  //this.dataSource.paginator=this.paginator
  }
  //dataSource['paginator']=paginator










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

  selection = new SelectionModel<PeriodicElement>(true, []);

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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.InvoiceNo + 1}`;
  }

  invoicedetails(row:any,index:any){
    console.log(index)
    // this.row=row
    this.InvoiceNo=this.row.InvoiceNo
    // console.log(this.row.InvoiceNo)
    // const x=this._router.navigate(['app/vendor_manager/invoicedetails',row.InvoiceNo])
    // console.log(x)
    this.row_index = index
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

  openDialog(item:any) {
    if(item==='Update status'){
      const dialogRef = this.dialog.open(UpdatestatusComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  };

    if(item==='Raise Query'){
    const dialogRef = this.dialog.open(QuerydialogComponent,{panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  
  }
  if(item==='History'){
    const dialogRef = this.dialog.open(HistoryComponent,{panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
applyFilter(){
  console.log(this.searchKey)
  this.dataSource.filter= this.searchKey.trim().toLowerCase()
  
  }
  tr_highlight(element:any){
    this.InvoiceNo=element.InvoiceNo 
    
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

}

