import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
// import { RecService } from '../../../recipientmapping/rec.service';
// import { Receipents } from '../../../recipientmapping/receipents';
import { RecService } from '../../communication.service';
import { Receipents } from '../../communication';
import { select, Store } from '@ngrx/store';
import { CommunicationState } from '../../Reducers/Communication.reducer';
import { changeCommListStatusInActive, deleteComm, getCommListId } from '../../Action/Communication.action';
import { getcommunication, getcommunicationid } from '../../Selector/Communication.selector';
import { outboundSerice } from '../outbond.service';


// import { recSelector } from '../../store/selectors/comform.selector';

@Component({
  selector: 'app-commapgrid',
  templateUrl: './commapgrid.component.html',
  styleUrls: ['./commapgrid.component.css']
})
export class CommapgridComponent implements OnInit {
  @ViewChild("drawer")
  drawer!: MatSidenav;
  @Input() drawer1: any;
  @Input() noofrows: any;
  @Input() tablewidth: any;
  // @Input() public search:any;
  @Output() public childEvent = new EventEmitter()
  @Output() public details = new EventEmitter()
  @Output() public index = new EventEmitter()
  @Output() public statusopen1 = new EventEmitter()
  // ELEMENT_DATA!: Result[];
  ELEMENT_DATA!: Receipents[];
  // 'description',
  displayedColumns: string[] = ['deliveryMode', 'isActive', 'action'];
  // dataSource = new MatTableDataSource<Result>(this.ELEMENT_DATA)
  dataSource = new MatTableDataSource<Receipents>(this.ELEMENT_DATA)
  data: any
  recipientId: any;
  statusActive: boolean = false;
  dumyresp :any;
  // statusActive:boolean=true;
  // statusActive!: boolean;
  edits: boolean = false;
  public nav = true;
  public delete_item = false;
  sno: any;
  @Input()
  statusopen!: boolean;
  // statusopen:boolean=true;
  // public statusopen=true;
  fb = new FormBuilder;
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  detailsrec: any = null;
  rowindex: any;
  rowdata: any = null;
  row: any = ''
  @ViewChild(MatPaginator, { static: true }) paginator: any;
  @ViewChild(MatSort) sort!: MatSort;
  grid_highlight: any;
  getdiv: boolean = false;
  recipientlistdetails: any=[];
  recipientlist: any;
  page: number = 1;
  defaultdetails: any = "";
  recipient_Id: any = ""
  dummy: any;
  mess: string = "";
  dumy1: any;
  search: any;
  searchTerm !: string;
  gstinarray: any = [];
  // search12: any;
  gstins = ["27AAACL6442L1ZA", "29AAACR4849R2ZG", "07AAEFE1763C1ZU", "06AAVCS4878E1ZP", "36AAACD7999Q1ZL", ""]
  gstindata: string = "";
  connectorId: any;
  indexx: any;
  forwardopen: boolean=true;
  error: any;


  constructor(private _activateroute: ActivatedRoute, private _router: Router,
    private _service: RecService, private store: Store<CommunicationState>,public out:outboundSerice) { }

  gstins1: any = "27AAACL6442L1ZA" + "29AAACR4849R2ZG" + "07AAEFE1763C1ZU" + "06AAVCS4878E1ZP" + "36AAACD7999Q1ZL"



  recipientlistClick(value: any, index: any) {
    // //console.log(value.recipientId)
    // //console.log(value.connectorId)
    this.out.index = index
     this.out.indexse = value.connectorId
    //  //console.log(this.out.indexse)
    this.recipientId = value.recipientId
    this.connectorId = value.connectorId
    // this.recipientlistdetails = value
    this.recipientlist = value
    this.dumy1 = value
    this.recipientId = value.recipientId
    this.recipientId = this.row.recipientId
    this.rowindex = value.connectorId
    // //console.log(value.recipientId)
    // //console.log(this.recipientlist)

    //getting id
     this.store.dispatch(getCommListId({id:value.connectorId}))   
 
    // this._service.getdatabyid(this.out.index).subscribe(res => {
    //   //console.log(res)
    //   this.dumyresp = res;

    //   // this.out.run.next(true)
    // })

    this.details.emit(value)
    this.index.emit(index)

  }
  opensidenav() {
    // this.statusopen = true
    this.forwardopen = true
    this.statusopen1.emit(false)
    // this.childEvent.emit(true)
  }
  showMe() {
    // if(!this.drawer.opened){
    //   this.drawer1.toggle();
    // }
    // this.getdiv = !this.getdiv
    // this.statusopen = false
    this.forwardopen = false
    this.statusopen1.emit(true)
  }

  delete(e: any, id: any) {
    e.stopPropagation();
    e.preventDefault();
    // //console.log("clicked on delete")
    // //console.log(id)
    this._service.deleteRec(id).subscribe(result => {
      alert("Record is deleted")
      window.location.reload();
      // //console.log(result, "deleted")
    })

  }

  ngOnChanges() {
    // this.searchfilter()
  }
  searchfilter() {
    // for(var i=0;i<this.gstins.length;i++){
    //   this.gstindata =this.gstindata+ this.gstins[i]
    // }
    // //console.log(this.search)
    // this.recipientlistdetails=this.recipientlistdetails.filter((e:any) =>  (e.deliveryMode+e.isActive+e.description+e.recipientTag).includes(this.search));
    // //console.log(this.search)
    if (this.search) {
      this.page = 1
     
      this.recipientlistdetails = this.recipientlistdetails.filter((e: any) =>
        // var serachitem = e.invoiceuploadDeliverymode + e.active + e.description + e.connectorTag 
        // for(var i=0;i<e.outboundConnectorsGSTIN.length;i++){
        //   serachitem = serachitem + e.outboundConnectorsGSTIN[i].gstin

        // }
        
        (e.invoiceuploadDeliverymode + e.active + e.description + e.connectorTag +e.outboundConnectorsGSTIN
          ).includes(this.search));
      // //console.log(this.recipientlistdetails)
      if (this.recipientlistdetails.length === 0) {
        this.mess = "No Data Found"
      }
      else {
        this.mess = ""
      }
    }
    else if (this.search === "") {
      this.recipientlistdetails = this.dummy
    }
  }



  ngOnInit(): void {
    // this.store.select(getcommunicationid).subscribe((data:any)=>{
    //   //console.log(data)
    //   if(data){

    //   }
    // })
    // this.store.select(getcommunication).subscribe(data=>
    //   {
    //     //console.log(data)
    //     this.recipientlist= data
    //     if(this.recipientlist){
    //       //console.log(data[0].recipientId)
    //     }
    //   })
    // this.getAllRec();
    // this.getstoreList();
    // this.recipientId = this.defaultdetails
    // ngAfterContentChecked
  }
  ngAfterContentChecked(){
    // this.getstoreList();
      // this.recipientId = this.defaultdetails
  }
  ngAfterContentInit(){
    this.getstoreList();
    this.recipientId = this.defaultdetails
    // this.connectorId = this.defaultdetails
    // this.recipientId =  this.recipientlistdetails[0].recipientId
  }

  getstoreList() {
    // this.store.dispatch(getCommList())
this.store.select(getcommunication).subscribe((data)=>{
  // //console.log(data)
  // if(data){
    if(data.length === 0){
  

  
    this.out.error.next(true)
    this.error = true
  }
  else{
    this.out.error.next(false)
    this.error = false

    this.data=data
  this.recipientlistdetails = this.data
  this.indexx= this.data[0].connectorId

  // //console.log(this.indexx)
  this.rowindex = this.data[0].connectorId
  // //console.log(this.rowindex)
  this.defaultdetails = this.data[0].connectorId
  this.connectorId = this.defaultdetails
  this.dummy = this.data
  this.recipientlist = this.data
  this.dataSource = new MatTableDataSource<any>(this.recipientlistdetails)
  // //console.log(this.dataSource)
  // //console.log(this.recipientlistdetails[0])
  // //console.log(this.data[0])
  this.detailsrec = this.data[0]
  this.recipientlist = this.data[0]
    // this.updaterow.patchValue({
    //     recipientTag:this.data[0].recipientTag,
    //     isActive:this.data[0].isActive,
    //     description:this.data[0].description,
    //     deliveryMode :this.data[0].deliveryMode,
    //     deliveryMechanism:this.data[0].deliveryMechanism,
    //     pincode:this.data[0].pincode,
    //     state:this.data[0].state,
    //     address1:this.data[0].address1,
    //     address2:this.data[0].address2
    //   })
  this.dataSource = new MatTableDataSource<any>(this.data)
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  // //console.log(this.dataSource)
  // //console.log(this.dataSource)
  }
  // }

})
  }

//old way of doing//
    // this.store.subscribe((resp) => {
    //   //console.log(resp)
    //   //console.log(resp.communications)
    //   this.data = resp.communications
    //   //console.log(resp.communications)
    //   this.data = this.data.results
    //   //console.log(this.data)
    //   this.recipientlistdetails = this.data
    //   this.defaultdetails = this.data[0].recipientId
    //   this.dummy = this.data
    //   this.recipientlist = this.data
    //   this.dataSource = new MatTableDataSource<any>(this.recipientlistdetails)
    //   //console.log(this.dataSource)
    //   //console.log(this.recipientlistdetails[0])
    //   //console.log(this.recipientlistdetails[0].outboundConnectorsGSTIN[0].gstin)
    //   //console.log(this.data[0])
    //   this.detailsrec = this.data[0]
    //   this.recipientlist = this.data[0]
    //   // this.updaterow.patchValue({
    //   //   recipientTag:this.data[0].recipientTag,
    //   //   isActive:this.data[0].isActive,
    //   //   description:this.data[0].description,
    //   //   deliveryMode :this.data[0].deliveryMode,
    //   //   deliveryMechanism:this.data[0].deliveryMechanism,
    //   //   pincode:this.data[0].pincode,
    //   //   state:this.data[0].state,
    //   //   address1:this.data[0].address1,
    //   //   address2:this.data[0].address2
    //   // })
    //   this.dataSource = new MatTableDataSource<any>(this.data)
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;

    //   //console.log(this.dataSource)
    //   //console.log(this.dataSource)
    // })}
    
  



  rec_edit() {
    this.edits = true
  }

  backsidenav() {
    this.nav = true
    this.delete_item = false
    this.sno = null
    this.statusopen = !this.statusopen
  }
  forwardsidenav(){
    this.forwardopen = !this.forwardopen
  }
  sidenav() {
    this.nav = false
    this.delete_item = true
  }
  public updaterow = this.fb.group({
    recipientTag: [''],
    deliveryMode: [''],
    description: [''],
    deliveryMechanism: [''],
    address1: [''],
    address2: [''],
    pincode: [''],
    state: [''],
    isActive: [''],
    emailAddress: [''],
    recipientGstinMappings: [],
    // recipientEmailMappings :[''],
    // gstvalue:[["27AAACL6442L1ZA"]],
    recipientFtpMappings: this.fb.array([
      this.ftp = this.fb.group({
        ftpLocation: [''],
        ftpServer: [''],
        password: [''],
        userName: ['']
      })
    ]),
    recipientEmailMappings: this.fb.array([
      this.email = this.fb.group({
        emailAddress: [''],
      })
    ]),
    recipientWebserviceMappings: this.fb.array([
      this.webservice = this.fb.group({
        url: [''],
        userName: [''],
        password: ['']
      })
    ])
  })

  updateRecord(value: any, index: any) {
    this.statusopen = true
    this.grid_highlight = value.recipientId
    this.detailsrec = value
    this.recipientlist = value
    this.dumy1 = value


    // this.recipientlistdetails = value
    // //console.log(this.recipientlistdetails)
    // //console.log(this.recipientlist)
    // //console.log(value)
    // if (!this.drawer1.opened) {
    this.rowdata = value
    this.rowindex = value.recipientId
    this.updaterow.patchValue({
      recipientTag: value.recipientTag,
      isActive: value.isActive,
      description: value.description,
      deliveryMode: value.deliveryMode,
      deliveryMechanism: value.deliveryMechanism,
      pincode: value.pincode,
      state: value.state,
      address1: value.address1,
      address2: value.address2,
      email: value.email,
      emailAddress: value.emailAddress,
      url: value.url,
      userName: value.userName,
      password: value.password,
      recipientGstinMappings: value.recipientGstinMappings,
      recipientEmailMappings: value.recipientEmailMappings,
      recipientWebserviceMappings: value.recipientWebserviceMappings
    })
  }
  // }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




 

  tr_highlight(element: any) {
    this.recipientId = element.recipientId
    // this.connectorId = element.connectorId
  }
  statusinactivechange1(e: any, id: any) {
    // //console.log("clicked on status changed button")
    // //console.log(id)
    this.store.dispatch(changeCommListStatusInActive({communications:id}))
    // changeCommListStatusInActive(id).communications
    // this._service.changeStatusInactive(id).subscribe(res=>{
    alert("Status is changed to Inactive")
    //  window.location.reload();
    // //console.log(res,"inactivated")
  }
  statusinactivechange(e: any, id: any) {
    // //console.log("clicked on status changed button")
    // //console.log(id)
    this._service.changeStatusInactive(id).subscribe(res => {
      alert("Status is changed to Inactive")
      //  window.location.reload();
      // //console.log(res, "inactivated")
    })
  }

  statuschangedelete1(e: any, id: any) {
    // //console.log("clicked on delete")
    // //console.log(id)
    this.store.dispatch(deleteComm({communications:id}))
    // this._service.deleteRec(id).subscribe(result => {
    //   alert("Record is deleted")
    //   //console.log(result, "deleted")
    // })
  }
  statuschangedelete(e: any, id: any) {
    // //console.log("clicked on delete")
    // //console.log(id)
    this._service.deleteRec(id).subscribe(result => {
      alert("Record is deleted")
      // //console.log(result, "deleted")
    })
  }
}






