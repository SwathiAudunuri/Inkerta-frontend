import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getpartnersDetailsInitialvalues } from '../Actions/GetPartnerDetails.actions';
import { getpartnersInitialvalues } from '../Actions/GetPartners.actions';
import { SetStatusInitialvalues } from '../Actions/SetStatus.actions';
import { onboardverificationService } from '../onboarding-verification.service';

@Component({
  selector: 'app-onboarding-verification',
  templateUrl: './onboarding-verification.component.html',
  styleUrls: ['./onboarding-verification.component.css']
})
export class OnboardingVerificationComponent implements OnInit {
  showsidenav:any=true;
  filterValue:any="";
  status:any=false;
  constructor(private store:Store,private service : onboardverificationService) { }

  ngOnInit() {
    this.store.dispatch(SetStatusInitialvalues())
    this.store.dispatch(getpartnersInitialvalues())
    this.store.dispatch(getpartnersDetailsInitialvalues())
  }
  sidenav(){
    this.showsidenav = !this.showsidenav
  }
  search(){
    // //console.log(this.filterValue)
    this.service.search.next(this.filterValue)
  }

}
