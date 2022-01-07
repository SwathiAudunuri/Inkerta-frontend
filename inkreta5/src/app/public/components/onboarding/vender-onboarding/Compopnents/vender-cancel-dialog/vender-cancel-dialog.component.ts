import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { VenderOnboardingComponent } from '../../vender-onboarding.component';

export interface DialogData {
  info: any;
  
}
@Component({
  selector: 'app-vender-cancel-dialog',
  templateUrl: './vender-cancel-dialog.component.html',
  styleUrls: ['./vender-cancel-dialog.component.css']
  // styleUrls: ['../style1.css']
})
export class VenderCancelDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VenderOnboardingComponent>,
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

