import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from "../../../auth/auth.service"
import {Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import {Login, loginComplete, LoginNull, logout} from '../../../actions/login.action'
import {Constants} from '../../../constants/constants'
import { faEnvelope,faLock,faUserTie,faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { LoginState } from 'src/app/selectors/login.selectors';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEnvelope:any = faEnvelope
  faLock:any = faLock
  faUserTie:any = faUserTie
  faUsersCog:any=faUsersCog
  loading: boolean=false;
  data: any;
  error: any;
  constructor(private service:AuthService, private router:Router, 
       private readonly store: Store,

    ) { }

  ngOnInit() {
    const user=new User('','','','','','','','')
    this.store.dispatch(logout({user})) 
    this.store.dispatch(LoginNull())
    this.store.select(LoginState).subscribe((data)=>{
      this.loading = data.loading
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
          this.error = data.result.errors.errorMessage
        }
        else{
          this.error = ""
          this.data = data.result
          const user=new User(this.data.results.userId,this.data.results.securityToken,this.data.results.roles[0],
            this.data.results.firstName,this.data.results.lastName,this.data.results.partnerId,this.data.results.partnerName,this.data.results.email)
            
            // this.partnerName=this.data.results.partnerName
            const res=  this.store.dispatch(loginComplete({user}))
            // this.user=user
            // if(this.user){ 
            //   //console.log(this.user)
            //  const dashboardroute='app/' +this.user.roles+'/dashboard/default'

            //   const dashboardroute='app/' +this.data.results.roles[0]+'/dashboard/default'
            // this.router.navigate([dashboardroute])
            // }
            if((this.data.results.roles[0]!=="businesspartner_manager")&&(this.data.results.roles[0]!=="businesspartner_user")){
              const dashboardroute='app/' +this.data.results.roles[0]+'/dashboard/default'
              this.router.navigate([dashboardroute])

              }
          
              else{
                const dashboardroute='app/' +this.data.results.roles[0]+'/common/dashboard'
                this.router.navigate([dashboardroute])

              }
        }
      }

    })
  }
user:any
data1:any
fb=new FormBuilder ;
  
  profileForm = this.fb.group({
    user: ['', Validators.required],
    password: ['',Validators.required],
  
});
 onSubmit () {
  // //console.log("insubmit")



  // TODO: Use EventEmitter with form value
  ////console.warn(this.profileForm.value);
  this.store.dispatch(Login({url:Constants.LOGIN_API_END_URL,data:this.profileForm.value}))

  // this.service.login(this.profileForm.value)



  //let user=(localStorage.getItem('appUser'))
  // //console.log("insubmit")

  this.store.subscribe(s => {
    this.data1=s
  this.user=(this.data1.loginReducer.user)
  //  //console.log(this.user.tokens)
 })
  
}

}
