import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./style.css']
  // styleUrls: ['../customer-onbording.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
@Input()
public Additional_Details:any;
  constructor() { }
  check:any=false
  ngOnInit(): void {
    this.check = this.Additional_Details.value.checkbox
  }

}
