import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-discard',
  templateUrl: './invoice-discard.component.html',
  styleUrls: ['./invoice-discard.component.css']
})
export class InvoiceDiscardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InvoiceDiscardComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
