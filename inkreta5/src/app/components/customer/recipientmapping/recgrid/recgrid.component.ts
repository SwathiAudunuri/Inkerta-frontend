import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receipents} from '../receipents';
import { RecService } from '../rec.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';

// import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-recgrid',
  templateUrl: './recgrid.component.html',
  styleUrls: ['./recgrid.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class RecgridComponent implements OnInit{
 
  

  // ELEMENT_DATA!: Result[];
  ELEMENT_DATA!: Receipents[];

  displayedColumns: string[] = ['recipientTag', 'description', 'deliveryMode','isActive','action'];
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
  @ViewChild(MatPaginator, {static: true}) paginator:any;
  @ViewChild(MatSort) sort!: MatSort;
  grid_highlight: any;

  constructor(private _activateroute:ActivatedRoute   ,private _router: Router, private _service: RecService) { }
 


  newData() {
    //console.log("hdbfdsb")
    // this._router.navigateByUrl('/app/partner_manager/recform')
    this._router.navigateByUrl('/app/customer_manager/recform')
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


  ngOnInit(): void {
    this.getAllRec();
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
        // recipientGstinMappings: [''],
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
        //console.log(value)
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
          recipientGstinMappings : value.recipientGstinMappings
        })
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
      this.data = resp
      this.data = this.data.results
      //console.log(this.data[0])
      this.detailsrec = this.data[0]
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

}


