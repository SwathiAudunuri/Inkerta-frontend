import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getUserDetails, getUserDetailsInitialValue } from '../../../Actions/GetUserDetails.actions';
import {  GetUserDetailsState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  // providers: [NgbAlertConfig]
})
export class UpdateUserComponent implements OnInit {
  @Input() rowindex:any
  @Input() ELEMENT_DATA:any;
  Fullname:string="";
  email:string="";
  phoneno:string="";
  role:any=null;
  audit:any="logins";
  imgurl:any;
  service: any;
  service1: any;
  error: any;
  company_name: any;
  loading: any;
  constructor(public store:Store,public userservice:UserManaghementService) { }
  public vendors:any="";
  ngOnInit() {
    this.service = this.userservice.userId.subscribe((id:any)=>{
        if(id){
          const url = Constants.GetUserDetails+id
          this.GetDetails(url)
        }
    })

  }
  GetDetails(url:any){
    //console.log(url)
    this.store.dispatch(getUserDetails({url:url}))
  }
  selectedIndexBinding(event: any) {
    
    this.userservice.tab=event.index
    this.userservice.changetab.next(true)

  }
  ngOnDestroy(){
    this.service.unsubscribe()
  }
}
