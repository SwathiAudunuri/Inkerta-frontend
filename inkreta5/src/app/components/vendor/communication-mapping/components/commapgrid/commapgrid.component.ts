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

@Component({
  selector: 'app-commapgrid',
  templateUrl: './commapgrid.component.html',
  styleUrls: ['./commapgrid.component.css']
})
export class CommapgridComponent implements OnInit {
  @ViewChild("drawer")
  drawer!: MatSidenav;
  @Input() drawer1: any;
  @Input() noofrows:any;
  @Input() tablewidth:any;
  @Input() public search:any;
  @Output() public childEvent = new EventEmitter()
  @Output() public details = new EventEmitter()
  @Output() public index = new EventEmitter()
  // ELEMENT_DATA!: Result[];
  ELEMENT_DATA!: Receipents[];
  // 'description',
  displayedColumns: string[] = [ 'deliveryMode','isActive','action'];
  // dataSource = new MatTableDataSource<Result>(this.ELEMENT_DATA)
  dataSource=  new MatTableDataSource<Receipents>(this.ELEMENT_DATA)
  data: any
  recipientId:any;   
  statusActive:boolean=false;
  // statusActive:boolean=true;
  // statusActive!: boolean;
  edits: boolean=false;
  public nav=true;
  public delete_item=false;
  sno: any;
  statusopen:boolean=true;
  // public statusopen=true;
  fb = new FormBuilder;
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  detailsrec :any = null;
  rowindex: any;
  rowdata:any=null;
  row:any=''
  @ViewChild(MatPaginator, {static: true}) paginator:any;
  @ViewChild(MatSort) sort!: MatSort;
  grid_highlight: any;
  getdiv: boolean = false;
  recipientlistdetails: any;
  recipientlist :any;
  page:number=1;
  defaultdetails: any="";
  recipient_Id : any =""
  dummy: any;
  mess: string="";
  dumy1: any;
  searchKey :any;
  constructor(private _activateroute:ActivatedRoute   ,private _router: Router, private _service: RecService) { }
 


  newData() {
    //console.log("hdbfdsb")
    // this._router.navigateByUrl('/app/partner_manager/recform')
    this._router.navigateByUrl('/app/customer_manager/recform')
  }
  showMe() {
    if(!this.drawer.opened){
      this.drawer1.toggle();
    }
    this.getdiv = !this.getdiv
  }
  recipientlistClick(value:any,index:any){
    //console.log(value)
    this.recipient_Id = value.recipientId
    // this.recipientlistdetails = value
    this.recipientlist =value

    this.dumy1=value

    this.recipientId = value.recipientId

    this.recipientId=this.row.recipientId
    this.rowindex = index

    //console.log(value.recipientId)
    // //console.log(this.recipientlistdetails)
    //console.log(this.recipientlist)
    this.details.emit(value)
    this.index.emit(index)
    // this.store.dispatch(getInvoiceListDetails({doc_refid : value.document_ref_id}))
    // this.store.dispatch(getInvoiceListHistory({doc_refid : value.document_ref_id}))
  }
  opensidenav(){
    this.statusopen=true
    // this.childEvent.emit(true)
  }
 
  delete(e:any,id: any){
  e.stopPropagation();
  e.preventDefault();
    //console.log("clicked on delete")
    //console.log(id)
    this._service.deleteRec(id).subscribe(result=>{
      alert("Record is deleted")
        window.location.reload();
      //console.log(result,"deleted")
    })
  
  }
 
  ngOnChanges()	{
    if(this.searchKey){
      this.page =1
      // this.invoicelist=this.invoicelist.filter((product: any) =>
        // product.company_name.toLocaleLowerCase().indexOf(this.search) !== -1);invoicenum
        this.recipientlistdetails=this.recipientlistdetails.filter((e:any) =>  (e.deliveryMode+e.isActive+e.description).includes(this.searchKey));
        // this.invoicelist=this.invoicelist.filter((e:any) =>
        //   (e.company_name.includes(this.search) ||e.invoicenum.includes(this.search))
        // );
        // .sort((a,b) => a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 :0);
      //console.log(this.recipientlistdetails)
      if(this.recipientlistdetails.length === 0){
        this.mess="No Data Found"
      }
      else{
        this.mess=""
      }
    }
    else if(this.searchKey === ""){
      this.recipientlistdetails = this.dummy
    }
  }
    
  
  
  ngOnInit(): void {
    this.getAllRec();
    this.recipient_Id = this.defaultdetails
  }
 
  rec_edit(){
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
 public updaterow= this.fb.group({
        recipientTag: [''],
        deliveryMode: [''],
        description: [''],
        deliveryMechanism: [''],
        address1: [''],
        address2: [''],
        pincode: [''],
        state: [''],
        isActive: [''],
        emailAddress :[''],
        recipientGstinMappings: [ ],
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

      updateRecord(value:any,index:any){
        this.statusopen=true
        //console.log(value.recipientId)
        this.grid_highlight = value.recipientId
        this.detailsrec=value
        this.recipientlist = value



        // this.recipientlistdetails = value
        // //console.log(this.recipientlistdetails)
        //console.log(this.recipientlist)
        //console.log(value)
        if (!this.drawer1.opened) {
        this.rowdata =value
        this.rowindex = value.recipientId
        this.updaterow.patchValue({
          recipientTag:value.recipientTag,
          isActive:value.isActive,
          description:value.description,
          deliveryMode :value.deliveryMode,
          deliveryMechanism:value.deliveryMechanism,
          pincode:value.pincode,
          state:value.state,
          address1:value.address1,
          address2:value.address2,
          email : value.email,
          emailAddress :value.emailAddress,
          url: value.url,
          userName: value.userName,
          password : value.password,
          recipientGstinMappings : value.recipientGstinMappings,
          recipientEmailMappings :value.recipientEmailMappings,
          recipientWebserviceMappings :value.recipientWebserviceMappings
        })}
      }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row: any){
    //console.log(row)
    //console.log(row.recipientId)
      this._router.navigate(['/app/customer_manager/recviewform/',row.recipientId])
  }
active(e:any,id: any){
e.stopPropagation();
e.preventDefault();
//console.log("active clicked")
  //console.log(id)
  this._service.changeStatusActive(id).subscribe(result=>{
    alert("Status is changed to Active")
     window.location.reload();
    //console.log(result,"actived")
  })
  // window.location.reload();
  
}


inactive(e:any,id:any){
e.stopPropagation();
e.preventDefault();
//console.log("inactive clicked")
  //console.log(id)
  this._service.changeStatusInactive(id).subscribe(res=>{
    alert("Status is changed to Inactive")
     window.location.reload();
    //console.log(res,"inactivated")
  })

}

  public getAllRec() {
    this._service.getRec().subscribe((resp) => {
      //console.log(resp)
      this.data = resp
      //console.log(resp)
      this.data = this.data.results
      // //console.log(this.data[0].recipientGstinMappings[0].gstin)
      //console.log(this.data)
      this.recipientlistdetails = this.data
      this.defaultdetails = this.data[0].recipientId
      this.dummy=this.data
       this.dataSource = new MatTableDataSource<any>(this.recipientlistdetails)
       //console.log(this.dataSource)
       //console.log(this.recipientlistdetails[0])
      //console.log(this.data[0])
      this.detailsrec = this.data[0]
      this.recipientlist = this.data[0]
      this.updaterow.patchValue({
        recipientTag:this.data[0].recipientTag,
        isActive:this.data[0].isActive,
        description:this.data[0].description,
        deliveryMode :this.data[0].deliveryMode,
        deliveryMechanism:this.data[0].deliveryMechanism,
        pincode:this.data[0].pincode,
        state:this.data[0].state,
        address1:this.data[0].address1,
        address2:this.data[0].address2
      })
      this.dataSource=  new MatTableDataSource<any>(this.data)

      //this.dataSource = this.data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      //console.log(this.dataSource)
      //console.log(this.dataSource)
    })
  }

  tr_highlight(element:any){

    this.recipientId= element.recipientId
  }

  statusinactivechange(e:any,id:any){
    //console.log("clicked on status changed button")
    //console.log(id)
  this._service.changeStatusInactive(id).subscribe(res=>{
    alert("Status is changed to Inactive")
    //  window.location.reload();
    //console.log(res,"inactivated")
  })
  }

  statuschangedelete(e:any,id:any){
    //console.log("clicked on delete")
    //console.log(id)
    this._service.deleteRec(id).subscribe(result=>{
      alert("Record is deleted")
        // window.location.reload();
      //console.log(result,"deleted")
    })
  }
}



  // constructor() { }

  // ngOnInit(): void {
  // }


