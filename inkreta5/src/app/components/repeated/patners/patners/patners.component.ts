import { Component, OnInit } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { InvoiceUploadFormNoComponent } from 'src/app/components/vendor/invoicelist/invoicelist/components/invoice-upload-form-no/invoice-upload-form-no.component';
import { AddGSTINInitialValue } from '../Actions/AddGstin.action';
import { GetPatnerDetailsInitialValue } from '../Actions/GetPatnerDetails.actions';
import { GetPatnerGstinDetailsInitialValue } from '../Actions/GetPatnerGstinDetails.actions';
import { SaveGSTINInitialValue } from '../Actions/savepatnerdata.actions';
import { getPatnersdetailsState } from '../Selectors/patners.selectors';
import { PatnersService } from './patners.service';

@Component({
  selector: 'app-patners',
  templateUrl: './patners.component.html',
  styleUrls: ['./patners.component.css']
})
export class PatnersComponent implements OnInit {
  sidenav:any = true;
  sidenav_width:any = true;
  newpatner:any = false;
  // patnerdata: any = null;
  service1: any;
  filterValue:any=null;
  constructor(private store:Store,private service:PatnersService) { }

  ngOnInit() {
    // this.store.dispatch(GetPatnerDetailsInitialValue())
    // this.store.dispatch(SaveGSTINInitialValue())
    // this.store.dispatch(GetPatnerGstinDetailsInitialValue())
    // this.store.dispatch(AddGSTINInitialValue())
    // this.store.dispatch(GetPatnerDetailsInitialValue())
    // this.service1 = this.store.select(getPatnersdetailsState).subscribe((data:any)=>{
    //   //console.log(data)
    //   if(data?.result){
    //     if(data?.result?.hasError){
    //       this.patnerdata = null
    //     }
    //     else{
    //       this.patnerdata = data?.result?.results
    //     }
    //   }
    // })
  }
  search(){
    // //console.log(this.filterValue)
    this.service.table_search.next(this.filterValue)
  }

  open_newpatner(){
    this.newpatner = true
  }
  close_toggle(){
    this.sidenav = !this.sidenav
  }
  // vendor_com(){
  //   const dialogRef = this.dialog.open(InvoiceUploadFormNoComponent,
  //     {disableClose: true,panelClass: 'custom-update-dialog-container',data: { "patnerdata": this.patnerdata}});
  // }
  ngOnDestroy(){
    // this.service1.unsubscribe()
    this.store.dispatch(GetPatnerDetailsInitialValue())
    this.store.dispatch(SaveGSTINInitialValue())
    this.store.dispatch(GetPatnerGstinDetailsInitialValue())
    this.store.dispatch(AddGSTINInitialValue())
  }
}
