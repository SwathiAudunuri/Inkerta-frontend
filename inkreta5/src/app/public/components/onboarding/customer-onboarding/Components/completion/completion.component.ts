import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubmitState } from '../../Selectors/OnboardSelector.selector';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css']
})
export class CompletionComponent implements OnInit {
  @Input()
  public Additional_Details: any;
  service1: any;
  constructor(public _store:Store,public router:Router) { }
  // firstname: any = "";
  // lastname: any = "";
  userId: any = "";
  email: any = "";
  displayName:any;
  ngOnInit() {
    this.service1=this._store.select(SubmitState).subscribe((data)=>{
      // this.loading = data.loading
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
          // this.mess = data.result.errors.errorMessage
        }
        else{
          // this.mess=""
          // //console.log("working fine")
          this.displayName = data.result.results.userDisplayName
          this.userId = data.result.results.userId
          this.email=data.result.results.email
        }
      }
    })
   }
   nav_home(){
    this.router.navigate([''])
   }
  ngDoCheck() {
    // this.firstname = this.Additional_Details.value.firstName
    // this.lastname = this.Additional_Details.value.lastName
    // this.userName = this.Additional_Details.value.userName
    // this.email = this.Additional_Details.value.email
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
  }
}


