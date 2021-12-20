import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List } from 'immutable';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getInvoiceList } from '../Actions/invoicelist.action';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { QuerydialogComponent } from './components/querydialog/querydialog.component';
import { UpdatestatusComponent } from './components/updatestatus/updatestatus.component';
import { HistoryComponent } from './components/history/history.component';
export interface PeriodicElement {
  InvoiceNo: number;
  Date:string;
  VendorName: string;
  Amount: number;
  DueDate: string;
  StatusOfInv:string;
  Action:Array<any>;
  complete:boolean
}
const ELEMENT_DATA: PeriodicElement[] = [
  {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'New',Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 2, Date: '1-11-21', VendorName: 'DRL', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 3, Date: '12-10-21', VendorName: 'DRL', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'New',Action:["Raise Query"],complete:false },
  {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 7, Date: '12-10-21', VendorName: 'DRL', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Onhold',Action:["Raise Query"] ,complete:false},
  {InvoiceNo : 8, Date: '12-9-21', VendorName: 'DRL', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 9, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'New',Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 2, Date: '1-11-21', VendorName: 'DRL', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 3, Date: '12-10-21', VendorName: 'DRL', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'New',Action:["Raise Query"] ,complete:false},
  {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 7, Date: '12-10-21', VendorName: 'DRL', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Onhold',Action:["Raise Query"],complete:false },
  {InvoiceNo : 8, Date: '12-9-21', VendorName: 'DRL', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 9, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},

];
@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.scss']
})
export class InvoicelistComponent implements AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator:any;

  constructor(public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store) { 
    config.backdrop = 'static';
    config.keyboard = true;
    config.centered= true
    config.backdrop=false
    config.modalDialogClass='model_content'
  }
  index:any;
  sidenav:boolean=false;
  details:any=null;
  closeResult = '';
  dataSource:any =''
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string="";
  tablesize={"width":"100%"}
  read_row:any=false;
  ngAfterViewInit() {
  this.dataSource.paginator=this.paginator
  
  }
  ngOnInit(): void {
    this.getAllRec()
  } 
  ngDoCheck(){
    // if(this.read_row === true){
    //   ELEMENT_DATA[this.index].complete = true
    // }
  }
  displayedColumns: string[] = ['select','InvoiceNo', 'Date', 'VendorName', 'Amount','DueDate','StatusOfInv','Action'];
  getAllRec(){
    this.store.dispatch(getInvoiceList())
  this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  console.log(this.dataSource)
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

  invoicedetails(row:PeriodicElement){
    this.row=row
    console.log(this.row.InvoiceNo)
    this._router.navigate(['/app/vendor_manager/invoicedetails',row.InvoiceNo])

    console.log(row)
    
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

}

