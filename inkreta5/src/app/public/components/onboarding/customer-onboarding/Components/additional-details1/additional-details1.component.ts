import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-details1',
  templateUrl: './additional-details1.component.html',
  styleUrls: ['./additional-details1.component.css']
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

