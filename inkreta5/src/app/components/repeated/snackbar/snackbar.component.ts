import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from './snackbar.service';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  message: any;


  constructor(private _snackBar: MatSnackBar,public service:SnackBarService) {
    
  }

  openSnackBar() {
    this._snackBar.open(this.message);
  }
  ngOnInit() {
    this.service.message.subscribe((mess:any)=>{
      this.message = mess
    })
  }

}
