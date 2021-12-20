import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(public sanitizer:DomSanitizer,private http:HttpClient) { }
  data1:any
  //BASE_URL= "http://183.83.219.159:7001/eInvoiceServices/api/"

//  BASE_URL  = "http://172.16.6.25:8080/eInvoiceServices/api/"
 BASE_URL="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"

  ngOnInit(): void {
    this.sideIcons()
  }
  sideIcons(){
    let  request = { "roles": ["vendor_manager"] };
    let roles={0:"vendor_manager"}
   // request.roles.push(roles.join(','))
  const GET_NAVIGATION_ITEMS = this.BASE_URL+"navitems";
   return this.http.post(GET_NAVIGATION_ITEMS,request)
  }
  getThemeURL()
  {

    return this.sanitizer.bypassSecurityTrustResourceUrl("Darktheme.scss")
  }

}
