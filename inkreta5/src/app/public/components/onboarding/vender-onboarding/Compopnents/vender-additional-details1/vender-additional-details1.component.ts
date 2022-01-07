import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vender-additional-details1',
  templateUrl: './vender-additional-details1.component.html',
  styleUrls: ['./vender-additional-details1.component.css']
  // styleUrls: ['../components1.css']
})
export class VenderAdditionalDetails1Component implements OnInit {
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

