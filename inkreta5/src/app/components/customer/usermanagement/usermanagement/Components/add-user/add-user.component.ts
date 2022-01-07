import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { CreateUser, CreateUsernull } from '../../../Actions/CreateUser.actions';
import { getUsers } from '../../../Actions/GetUsers.actions';
import { CreateUserState, GetUserDetailsState } from '../../../Selectors/usermanagement.selectors';
import { UserManaghementService } from '../../UserManagement.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  imgurl: any = "./assets/profile.png";
  useridsuggested: any;
  loading: any;
  error: any;
  service: any;
  service1: any;
  patnerid: any;
  @Output() public sidenavshow = new EventEmitter();

  constructor(public _myFB: FormBuilder, private store: Store, public _http: HttpClient,private userservice:UserManaghementService) { }

  ngOnInit() {
    this.store.dispatch(CreateUsernull())
    this.Add_user.controls['userid'].disable();
    this.service = this.store.select(CreateUserState).subscribe((data:any)=>{
      //console.log(data)
      this.loading = data.loading
      if(data.result){
        if(data.result.hasError){
          this.error = data.result.errors.errorMessage
        }
        else{
          this.error=""
          //console.log()
          this.userservice.partnerId.next(data?.result?.results?.partnerId)
          this.store.dispatch(getUsers({url:Constants.GetUsers}))
          this.sidenavshow.emit(false);
        }
      }
    })

    this.service1 = this.store.select(GetUserDetailsState).subscribe((data:any)=>{
      //console.log(data)
      this.loading=data.loading
      if(data.details){
        if(data.details.hasError){
          this.error = data.details.hasError.errors.errorMessage
        }
        else{
          //console.log(data.details.results)
          if(data.details.results.userdetails){
            this.patnerid=data.details.results.userdetails.partner_type
          }
        }
      }
    })
  }
  Add_user = this._myFB.group({
    img: ['./assets/profile-photo.jpg'],
    firstname: [''],
    lastname: [''],
    mobile_no: [''],
    email: [''],
    role: [''],
    userid: [''],
    userAlias:[''],
    title:['Mr']
  })
  submit_adduser() {
    //console.log(this.Add_user)
    const data :any = {
      "email": this.Add_user.value.email,
      "firstName": this.Add_user.value.firstname,
      "lastName": this.Add_user.value.lastname,
      "mobileNumber": this.Add_user.value.mobile_no,
      "title": this.Add_user.value.title,
      "userAlias": this.Add_user.value.userAlias,
      "roles": []
    }
    data.roles.push(this.Add_user.value.role)
    //console.log(data)
    this.store.dispatch(CreateUser({ url: Constants.CreateUser, data:data}))
  }
  profile_img(event: any) {
    //console.log(event)
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        //console.log(event.target.result)
        this.imgurl = event.target.result
        //console.log(this.imgurl)
        this.Add_user.patchValue({
          img: event.target.result
        })
        // //console.log(this.updaterow)
      }

    }
  }
  onChange() {


    const url = "https://164.52.217.12:8443/onboarding/check/username/" + this.Add_user.value.firstname + "_" + this.Add_user.value.lastname
    this._http.get<any>(url)
      .subscribe(data => {

        this.useridsuggested = data.results.suggesteduserName
        if (this.useridsuggested.length !== 0) {
          //console.log("backend")
          this.Add_user.patchValue({
            userid: this.useridsuggested[0]
          })
        }
        else {
          //console.log("fixed")
          this.Add_user.patchValue({
            userid: this.Add_user.value.firstname + " " + this.Add_user.value.lastname
          })
        }
      })
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }
}
