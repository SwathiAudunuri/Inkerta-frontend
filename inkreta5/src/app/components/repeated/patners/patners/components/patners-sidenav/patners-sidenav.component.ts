import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { InvoiceUploadFormComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/invoice-upload-form/invoice-upload-form.component';
import { InvoiceUploadFormNoComponent } from 'src/app/components/vendor/invoicelist/invoicelist/components/invoice-upload-form-no/invoice-upload-form-no.component';
import { getPatnersdetailsState } from '../../../Selectors/patners.selectors';
import { PatnersService } from '../../patners.service';

@Component({
  selector: 'app-patners-sidenav',
  templateUrl: './patners-sidenav.component.html',
  styleUrls: ['./patners-sidenav.component.css']
})
export class PatnersSidenavComponent implements OnInit {
  @Output() public sidenav_width=new EventEmitter()
  public arrow = true
  patnerdata:any=null;
  service1: any;
  error: any;
  editdetails: boolean=false;
  title: any;
  constructor(private service:PatnersService,private store:Store,private dialog:MatDialog) { }

  ngOnInit() {
    this.service.error.subscribe((data)=>{
      this.error = data
    })
    this.service.title.subscribe((data)=>{
      this.title = data
    })
    this.service.partner_id.next(null)
    this.service1 = this.store.select(getPatnersdetailsState).subscribe((data:any)=>{
      //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
          this.patnerdata = null
        }
        else{
          this.patnerdata = data?.result?.results
        }
      }
    })
  }
  selectedIndexBinding(event: any) {
    // this.userservice.tab=event.index
    // this.userservice.changetab.next(true)
  }
  vendor_com(){
    const dialogRef = this.dialog.open(InvoiceUploadFormNoComponent,
      {disableClose: true,panelClass: 'custom-update-dialog-container',data: { "patnerdata": this.patnerdata}});
  }
  customer_com(){
      const dialogRef = this.dialog.open(InvoiceUploadFormComponent,
        {disableClose: true,panelClass: 'custom-update-dialog-container',data: { "patnerdata": this.patnerdata}});
  }
  Edit_details(){
    this.editdetails = true
    this.service.title.next(true)
  }
  close(){
    this.sidenav_width.emit(!this.arrow)
    this.arrow = !this.arrow
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service.partner_id.next(null)
  }
}

