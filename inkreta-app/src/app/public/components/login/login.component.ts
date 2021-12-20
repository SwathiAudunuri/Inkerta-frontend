import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from "../../../auth/auth.service"
import {Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:AuthService, private router:Router, 
       private readonly store: Store,

    ) { }

  ngOnInit(): void {
  }
user:any
data1:any
fb=new FormBuilder ;
  
  profileForm = this.fb.group({
    user: ['', Validators.required],
    password: ['',Validators.required],
  
});
 onSubmit () {
  console.log("insubmit")



  // TODO: Use EventEmitter with form value
  //console.warn(this.profileForm.value);
  this.service.login(this.profileForm.value)
  //let user=(localStorage.getItem('appUser'))
  console.log("insubmit")

  this.store.subscribe(s => {
    this.data1=s
  this.user=(this.data1.loginReducer.user)
   console.log(this.user.tokens)
 })
  
}

}
