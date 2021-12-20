import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./style.css']
})
export class CompletionComponent implements OnInit {
 @Input()
 public Additional_Details:any;
  constructor() { }
  firstname:any="";
  lastname:any="";
  userName:any="";
  email:any="";
  ngOnInit() {}
  ngDoCheck(){
      this.firstname=this.Additional_Details.value.firstName
      this.lastname=this.Additional_Details.value.lastName
      this.userName=this.Additional_Details.value.userName
      this.email=this.Additional_Details.value.email
  }

}
