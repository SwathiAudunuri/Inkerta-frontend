import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VendorserviceService } from '../../vendorservice.service';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VendorselectiondialogComponent } from '../vendorselectiondialog/vendorselectiondialog.component';
import { select, Store } from '@ngrx/store';
import { VendorState } from '../../Reducers/vendormap.reducer';
import { deleteVendor, statusactiveVendor, statusinactiveVendor } from '../../Actions/vendormap.action';
import { getsupplier } from '../../Selectors/vendormap.selector';
@Component({
  selector: 'app-vendormappinggrid',
  templateUrl: './vendormappinggrid.component.html',
  styleUrls: ['./vendormappinggrid.component.css']
})

export class VendormappinggridComponent implements AfterViewInit {
  @ViewChild("drawer")
  drawer!: MatSidenav;
  @Input() drawer1: any;
  @Output() public statusopen1 = new EventEmitter()
  @Input()
  statusopen!: boolean;
  displayedColumns: string[] = ['description', 'vendorPartnerId','status','action'];
  // dataSource = new MatTableDataSource<PeriodicElement>();
  data: any = [];
  searchkey : any
 opened=false;
  temp:any
  dataSource:any;
  // accessTokenObj:any=[];
  // token:any;
  status: boolean = false;
  color = 'green'
  mappingId :any;
  // @Input() drawer: any;
  
  statustoggle: boolean = false;
  vendorForm!: FormGroup
  submitted = false;
  accessTokenObj: any = localStorage.getItem("user");
  token: any = JSON.parse(this.accessTokenObj);
  public fruit: any = { description: ''};
  maxChars =250;

  edits: boolean=false;
  public nav=true;
  public delete_item=false;
  sno: any;
  getdiv: boolean = false;
  detailstodo : any =null;
  // statusopen:boolean=true;
  rowindex: any;
  rowdata:any=null;
  vendor_edit(){
    this.edits=true
}

backsidenav(){
  this.nav=true
  this.delete_item=false
  this.sno=null
  this.statusopen = false
}
sidenav(){
  this.nav=false
  this.delete_item=true
  
}

  open(){
    // this.statustoggle=true;
    this.statustoggle = !this.statustoggle;
}



  @ViewChild(MatPaginator, {static: true}) paginator:any;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private serviceProvider: VendorserviceService,
    public dialog: MatDialog, private formBuilder: FormBuilder,
     private http: VendorserviceService ,private store: Store<VendorState> ) {
   
  }

  ngAfterViewInit() {
    ////console.log(this.drawer1)
    ////console.log(this.dataSource)
  }
  opensidenav(){
    this.statusopen=true
    this.statusopen1.emit(false)
  }
  showMe() {
    // if(!this.drawer.opened){
    //   this.drawer1.toggle();
    // }
    // this.getdiv = !this.getdiv
    this.statusopen = false
    this.statusopen1.emit(true)
  }
  public updaterow= this.formBuilder.group({
    customerPartnerId: this.token.results.partnerId,
    vendorPartnerId: '',
    description: [''],
    vendorMappingActivities: this.formBuilder.array([
      {
        actionComments:'',
        actionTaken:''
      }
    ])
  })

  updateRecord(value:any,index:any){
    ////console.log("updateRecord clicked")
    
    this.statusopen = true
      this.detailstodo=value;
      ////console.log(value)
      // if (!this.drawer1.opened) {
        this.rowdata = value
        this.rowindex = value.mappingId
        // ////console.log(this.rowindex)
        this.updaterow.patchValue({
          vendorPartnerId:value.vendorPartnerId,
          // status:value.status,
          taskRefId:value.mappingId,
          customerPartnerId:value.customerPartnerId,
          description:value.description
          })
  }
  
  ngOnInit() {
    // this.store.select(getsupplier).subscribe(data=>{
    //   ////console.log(data)
    //   this.dataSource = data[0]

    // })
    this.getMappingDetails1();
  
  }
  ngAfterContentInit(){
    // this.getMappingDetails1();
  }

  

  delete1(e:any,id:any){
    e.stopPropagation();
    e.preventDefault();
      ////console.log("clicked on delete")
      ////console.log(id)
      this.store.dispatch(deleteVendor({suppliers :id}))
    }
  
    active1(e:any,id: any){
      e.stopPropagation();
      e.preventDefault();
      ////console.log("active clicked")
        ////console.log(id)
        this.store.dispatch(statusactiveVendor({suppliers:id}))  
      }
      inactive1(e:any,id:any){
        e.stopPropagation();
        e.preventDefault();
        ////console.log("inactive clicked")
          ////console.log(id)
          this.store.dispatch(statusinactiveVendor({suppliers : id}))
        }
  delete(e:any,id: any){
    e.stopPropagation();
    e.preventDefault();
      ////console.log("clicked on delete")
      ////console.log(id)
      this.serviceProvider.deleteVendor(id).subscribe(result=>{
        ////console.log(result,"deleted")
      })
      // window.location.reload();
    }



  active(e:any,id: any){
    e.stopPropagation();
    e.preventDefault();
    ////console.log("active clicked")
      ////console.log(id)
      this.serviceProvider.changeStatusActive(id).subscribe(result=>{
        ////console.log(result,"actived")
      })
      // window.location.reload();
      
    }

    inactive(e:any,id:any){
      e.stopPropagation();
      e.preventDefault();
      ////console.log("inactive clicked")
        ////console.log(id)
        this.serviceProvider.changeStatusInactive(id).subscribe(res=>{
          ////console.log(res,"inactivated")
        })
      //  window.location.reload();
      }

      onSearch(){
        this.serviceProvider.searchVendor(this.searchkey).subscribe(responses=>{
         this.temp=responses
         ////console.log(this.temp)
         this.dataSource = new MatTableDataSource<any>(this.temp);
         this.dataSource.paginator = this.paginator;
  
        })
      }

      getMappingDetails1() {
        
        this.store.select(getsupplier).subscribe((data)=>{
      
        this.data = data
          this.data = this.data
          
          this.detailstodo = this.data[0]
          this.updaterow.patchValue({
            vendorPartnerId: this.data[0]?.vendorPartnerId,
            taskRefId: this.data[0]?.mappingId,
            customerPartnerId: this.data[0]?.customerPartnerId,
            description: this.data[0]?.description
            })
          this.dataSource = new MatTableDataSource<any>(this.data);
        
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         
        })
    
      }

  getMappingDetails() {
    this.serviceProvider.getDetails().subscribe(res => {
      this.data = res
      this.data = this.data.results
      ////console.log(this.data[0])
      this.detailstodo = this.data[0]
      this.updaterow.patchValue({
        vendorPartnerId: this.data[0].vendorPartnerId,
        // status:value.status,
        taskRefId: this.data[0].mappingId,
        customerPartnerId: this.data[0].customerPartnerId,
        description: this.data[0].description
        })
      this.dataSource = new MatTableDataSource<any>(this.data);
    
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      ////console.log(this.data)
    })

  }
  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  getRecord(row:any){
////console.log("clicked on row")
  }

  tr_highlight(element:any){
    this.mappingId= element.mappingId
  }
 
}
