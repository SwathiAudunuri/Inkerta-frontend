import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-AdditionalDetails1',
  templateUrl: './AdditionalDetails1.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./component.css']
})
export class AdditionalDetails1Component implements OnInit {
  @Input() 
  public next:any;
  @Input()
  public Additional_Details:any;
  @Input()
  public ONBOARDING_MASTER_DROPDOWN:any;
  constructor(public _myFB : FormBuilder) { }

  ngOnInit() {
 
  }
  ngAfterViewChecked(){
  }

}
