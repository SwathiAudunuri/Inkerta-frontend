import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { GetPatnerdetailsState } from '../../../Selectors/onboarding-verification.selectors';

@Component({
  selector: 'app-gstin-details',
  templateUrl: './gstin-details.component.html',
  styleUrls: ['./gstin-details.component.css']
})
export class GstinDetailsComponent implements OnInit {
  ELEMENT_DATA:any=[]
  displayedColumns: string[] = ['GSTIN', 'Trade_Name', 'Location', 'NatureOfBusiness'];
  dataSource = this.ELEMENT_DATA
  service1: any;
  gstindetails: any;
  constructor(private store:Store) { }

  ngOnInit() {
   this.service1 =  this.store.select(GetPatnerdetailsState).subscribe((data:any)=>{
      //console.log("details",data)
      if(data.details){
        if(data.details.hasError){
          //console.log('error')
        }
        else{
          this.gstindetails=data.details.results
          if(data.details?.results?.partnerGSTINDetails){
            this.dataSource =new MatTableDataSource<any>(data.details?.results?.partnerGSTINDetails);
          }
        }
      }
    })
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
}

}
