import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatestatusComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
    
  }
}
