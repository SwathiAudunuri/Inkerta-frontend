import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
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
