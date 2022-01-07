import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GatProfileState } from '../../../Selectors/profilemanagement.selectors';

@Component({
  selector: 'app-additional-details-readonly',
  templateUrl: './additional-details-readonly.component.html',
  styleUrls: ['./additional-details-readonly.component.css']
})
export class AdditionalDetailsReadonlyComponent implements OnInit {
  average = "<100"
  @Input() Profile_Details:any;
  service: any;
  profile_info: any;
  constructor(public store:Store) { }

  ngOnInit() {

  }

}
