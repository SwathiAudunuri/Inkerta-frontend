import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender-terma-and-conditions',
  templateUrl: './vender-terma-and-conditions.component.html',
  styleUrls: ['./vender-terma-and-conditions.component.css']
  // styleUrls: ['../style1.css']
})
export class VenderTermaAndConditionsComponent implements OnInit {
  @Input()
  public Additional_Details:any;
    constructor() { }
    check:any=false
    ngOnInit(): void {
      this.check = this.Additional_Details.value.checkbox
    }
  
}
