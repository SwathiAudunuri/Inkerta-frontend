import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private dialog:MatDialog,public dialogRef: MatDialogRef<ResetPasswordComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }

}
