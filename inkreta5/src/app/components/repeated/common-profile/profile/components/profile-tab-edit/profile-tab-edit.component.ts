import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginState } from '../../../Selectors/profile.selectors';

@Component({
  selector: 'app-profile-tab-edit',
  templateUrl: './profile-tab-edit.component.html',
  styleUrls: ['./profile-tab-edit.component.css']
})
export class ProfileTabEditComponent implements OnInit {
  service1: any;

  constructor(private _myFb:FormBuilder,private store:Store) { }
  profile = this._myFb.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    mobile:['1234567890'],
    role:[''],
    img:['./assets/avatar.jpg']
  })
  ngOnInit() {
   this.service1 =  this.store.select(loginState).subscribe((data)=>{
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
        }
        else{
          this.profile.patchValue({
            firstname:data?.result?.results?.firstName,
            lastname:data?.result?.results?.lastName,
            email:data?.result?.results?.email,
            role:data?.result?.results?.roles[0]
          })
        }
      }
    })
  }

  profile_img(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.profile.patchValue({
          img:event.target.result
        })
      }
    }
  }
  save(){
    // this.edit = false
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
  }
}
