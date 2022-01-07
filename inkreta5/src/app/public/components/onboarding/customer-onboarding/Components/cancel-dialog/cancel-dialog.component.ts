import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CustomerOnboardingComponent } from '../../customer-onboarding.component';
import { CustomerOnboardingService } from '../../customerOnboardingService'; 
export interface DialogData {
  info: any;
  
}
@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.css']
})
export class CancelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomerOnboardingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _store : Store<{save: {data : any}}>
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  yesclick(){
    //console.log(this.data.info.value)
    // this._store.dispatch(vendersaveonbord(this.data.info.value))
  }
}


