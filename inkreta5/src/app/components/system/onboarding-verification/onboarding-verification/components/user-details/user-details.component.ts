import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getpartnersDetails } from '../../../Actions/GetPartnerDetails.actions';
import { SetStatus } from '../../../Actions/SetStatus.actions';
import { onboardverificationService } from '../../../onboarding-verification.service';
import { GetPatnerdetailsState } from '../../../Selectors/onboarding-verification.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Output() status=new EventEmitter();
  screen:any=false;
  service1: any;
  service2: any;
  loading: any;
  service3: any;
  patner_status: any;
  servie4: any;
  patnerId: any;
  constructor(private service:onboardverificationService,private store:Store) { }

  ngOnInit() {
    this.service1=this.service.patnerId.subscribe((data:any)=>{
      if(data){
        const url=Constants.GetPatnersDetails+data
        this.store.dispatch(getpartnersDetails({url:url}))
      }
    })
    this.service2 =  this.store.select(GetPatnerdetailsState).subscribe((data:any)=>{
      this.loading = data.loading
    })
    this.service3 = this.service.status.subscribe((data:any)=>{
      if(data){
        this.patner_status = data
      }
    })
    this.servie4= this.service.patnerId.subscribe((data:any)=>{
      if(data){
        this.patnerId = data
      }
    })
  }
  fullscreen(){
    this.screen = !this.screen
    this.status.emit(this.screen)
  }
  setstatus(value:any){
    var url=Constants.SetStatusURL+this.patnerId+"/"+value
    this.store.dispatch(SetStatus({url:url}))
  
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
    this.service3.unsubscribe()
    this.servie4.unsubscribe()
}
}

