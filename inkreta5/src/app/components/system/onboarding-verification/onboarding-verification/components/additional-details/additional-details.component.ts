import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetPatnerdetailsState } from '../../../Selectors/onboarding-verification.selectors';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {
  service1: any;
  additionaldetails: any=null;

  constructor(private store:Store) { }

  ngOnInit() {
    this.service1 =  this.store.select(GetPatnerdetailsState).subscribe((data:any)=>{
      //console.log("details",data)
      if(data.details){
        if(data.details.hasError){
          //console.log('error')
        }
        else{
          this.additionaldetails=data.details?.results?.partnerDetails
          // if(data.details?.results?.partnerContactDetails){
          //   this.dataSource =new MatTableDataSource<any>(data.details?.results?.partnerContactDetails);
          // }
        }
      }
    })
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
}
}
