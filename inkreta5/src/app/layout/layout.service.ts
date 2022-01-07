import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../constants/constants';
import { LayoutComponent } from './layout/layout.component';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  href=new BehaviorSubject<any>(null)
  link=new BehaviorSubject<any>(null)

  constructor(public sanitizer:DomSanitizer,private http:HttpClient,private store:Store) { }
  data1:any
  public open:any;
  user:any;
  //BASE_URL= "http://183.83.219.159:7001/eInvoiceServices/api/"

//  BASE_URL  = "http://172.16.6.25:8080/eInvoiceServices/api/"
//BASE_URL="localhost:8080/api/"
// BASE_URL="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"
 ngOnInit(): void {
  this.sideIcons()
}
 openDrawer(){
   this.open=true
   return this.open
 }
closeDrawer(){
  this.open=false
  return this.open
}
 
  sideIcons(){
    this.store.subscribe(data=>{
      this.user=data
      this.user=this.user.loginReducer.user
    
    })
    //console.log(this.user)
    let  request = { "roles": [this.user.roles] };
   // let roles={0:"customer_user"}
   // request.roles.push(roles.join(','))
   //console.log(request)
  //const GET_NAVIGATION_ITEMS = this.BASE_URL+"navitems";
   return this.http.post(Constants.GET_NAVIGATION_ITEMS,request)
  }
  getThemeURL()
  {

    return this.sanitizer.bypassSecurityTrustResourceUrl("Darktheme.scss")
  }
 

}
