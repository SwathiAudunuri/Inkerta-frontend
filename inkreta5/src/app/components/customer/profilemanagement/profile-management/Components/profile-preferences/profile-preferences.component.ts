import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-preferences',
  templateUrl: './profile-preferences.component.html',
  styleUrls: ['./profile-preferences.component.css']
})
export class ProfilePreferencesComponent implements OnInit {
  query:any=true;
  task:any=true;
  invoice:any=false;
  vender:any=false;
  email:any=true;
  sms:any=true;

  @Input() public edit_btn:any;
  @Input() public Profile_Details:any;
  constructor() { }

  ngOnInit(): void {
  }

}
