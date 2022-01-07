import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { loginComplete,LoginNull,logout } from "../actions/login.action";
import {Router } from '@angular/router';
import { User } from "../models/user.model";
// import { UsersComponent } from '../components/users/users.component';
import { first } from 'rxjs/operators';
import { Constants } from '../constants/constants';
//import { ConsoleReporter } from 'jasmine';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // BASE_URL  = "http://172.16.6.25:8080/eInvoiceServices/api/"
// BASE_URL="http://183.83.219.159:7001/eInvoiceServices/api/"
// BASE_URL="http://localhost:8080/api/"
//BASE_URL="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"
// LOGIN_API_END_URL = this.BASE_URL + "login"
  data:any=''
  user:any=''
  role:any=''
  partnerName:string="";
  constructor(private store: Store,private http:HttpClient,
    private router:Router
    ) { }

    login(data:any){
      const headers = { 'content-type': 'application/json'}  
      // //console.log(data)
      this.http.post(Constants.LOGIN_API_END_URL,data).subscribe( results=>{
       
        this.data= results
        this.role=this.data.results.roles
        //console.log(this.data.results.roles[0])
        //console.log(this.data.results.securityToken) 
        //console.log(this.data.results.userId) 
        //console.log(this.data.results.partnerId)
        //console.log(this.data.results)
        localStorage.clear()
        localStorage.setItem('user',JSON.stringify(results))
          const user=new User(this.data.results.userId,this.data.results.securityToken,this.data.results.roles[0],
            this.data.results.firstName,this.data.results.lastName,this.data.results.partnerId,this.data.results.partnerName,this.data.results.email)
            
            this.partnerName=this.data.results.partnerName
         const res=  this.store.dispatch(loginComplete({user}))
         this.user=user
       //  this.token=results 
      // this.token=this.token.results.sec  urityToken
        //console.log(res)   
  
          //console.log(this.user)


          if(this.user){ 
            //console.log(this.user)
          //  const dashboardroute='app/' +this.user.roles+'/dashboard/default'

            const dashboardroute='app/' +this.data.results.roles[0]+'/dashboard/default'
          this.router.navigate([dashboardroute])
          }

       })


   }
   getRole(){
     return this.role
   }
   getToken(){

     return ''
   }

   logout(){
        //console.log("in logout"); 
        localStorage.removeItem('state')    
        //this.store.setState({})
        //const user1=null
        //const  tokens=null
        const user=new User('','','','','','','','')

        this.store.dispatch(LoginNull())
      this.store.dispatch(logout({user}))  
      this.router.navigate(['/'])
    }
    refresh(params:any,options:any){
      //console.log(params)
      //console.log(options)
      this.http.post("http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/refresh_token", params, options).pipe(first()).subscribe((result)=>{
         //console.log(result)
          })
    }

  
  }
