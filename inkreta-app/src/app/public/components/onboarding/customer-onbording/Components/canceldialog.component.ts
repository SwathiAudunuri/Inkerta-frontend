import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CustomerOnbordingComponent } from '../customer-onbording.component';
import { saveonbord } from '../store/Actions';

export interface DialogData {
  info: any;
  
}

@Component({
  selector: 'app-canceldialog',
  templateUrl: './canceldialog.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./style.css']
})
export class CanceldialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomerOnbordingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _store : Store<{save: {data : any}}>
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  yesclick(){
    console.log(this.data.info.value)
    this._store.dispatch(saveonbord(this.data.info.value))
  }
}
