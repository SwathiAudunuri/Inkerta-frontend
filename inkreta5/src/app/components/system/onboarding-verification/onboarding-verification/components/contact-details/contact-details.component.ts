import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { GetPatnerdetailsState } from '../../../Selectors/onboarding-verification.selectors';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  ELEMENT_DATA:any=[]
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileno'];
  dataSource = this.ELEMENT_DATA;
  service1: any;
  contactdetails: any;
  constructor(private store:Store) { }

  ngOnInit() {
    this.service1 =  this.store.select(GetPatnerdetailsState).subscribe((data:any)=>{
      //console.log("details",data)
      if(data.details){
        if(data.details.hasError){
          //console.log('error')
        }
        else{
          this.contactdetails=data.details?.results?.partnerContactDetails[0]
          if(data.details?.results?.partnerContactDetails){
            this.dataSource =new MatTableDataSource<any>(data.details?.results?.partnerContactDetails);
          }
        }
      }
    })
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
}

}
