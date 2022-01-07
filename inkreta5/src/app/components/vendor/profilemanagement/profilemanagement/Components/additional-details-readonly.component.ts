import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-details-readonly',
  templateUrl: './additional-details-readonly.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class AdditionalDetailsReadonlyComponent implements OnInit {
  average = "<100"
  constructor() { }

  ngOnInit(): void {
  }

}
