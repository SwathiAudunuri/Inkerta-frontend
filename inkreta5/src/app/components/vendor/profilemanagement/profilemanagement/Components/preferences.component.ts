import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class PreferencesComponent implements OnInit {
  query:any=true;
  task:any=true;
  invoice:any=false;
  vender:any=false;
  email:any=true;
  sms:any=true;

  @Input() public edit_btn:any;
  @Input() public Additional_Details:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.Additional_Details.patchValue({
      query_pre:this.query,
      task_pre:this.task,
      invoice_pre:this.invoice,
      vender_pre:this.vender,
      email_pre:this.email,
      sms_pre:this.sms
    })
  }

}
