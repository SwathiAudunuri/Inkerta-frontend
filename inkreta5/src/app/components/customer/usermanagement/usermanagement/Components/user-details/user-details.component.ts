import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getUserDetails, getUserDetailsInitialValue } from '../../../Actions/GetUserDetails.actions';
import { GetUserDetailsState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() index:any
  company_name: any;
  role: any;
  phoneno: any;
  email: any;
  Fullname: any;
  error: any;
  loading: any;
  service1: any;
  service: any;
  imgurl:any="./assets/avatar.jpg"
  service2: any;
  id: any;

  constructor(public store:Store,public userservice:UserManaghementService) { }

  ngOnInit() {
    this.store.dispatch(getUserDetailsInitialValue())
    // this.service = this.userservice.userId.subscribe((id:any)=>{
    //   this.id=id
    //   if(this.userservice.tab === this.index){
    //     if(id){
    //       const url = Constants.GetUserDetails+id
    //       this.GetDetails(url)
    //     }
    //   }
    // })
    // this.service2 = this.userservice.changetab.subscribe((value) => {
    //   if(this.userservice.tab === this.index){
    //     if(value){
    //       const url = Constants.GetUserDetails+this.id
    //       this.GetDetails(url)
    //     }
    //   }
    // })
    this.service = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      //console.log(data)
      this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          this.error = data.details.hasError.errors.errorMessage
        }
        else{
          //console.log(data.details.results)
          if(data.details.results.userdetails){
            this.Fullname = data.details.results.userdetails.first_name+" "+data.details.results.userdetails.last_name
            this.email = data.details.results.userdetails.email
            this.phoneno = data.details.results.userdetails.last_name
            this.role = data.details.results.userdetails.roles
            this.company_name = data.details.results.userdetails.company_name
          }
        }
      }
    })

  }
  GetDetails(url:any){
    //console.log(url)
    this.store.dispatch(getUserDetails({url:url}))
  }
  ngOnDestroy(){
    this.service.unsubscribe()
  }
}
