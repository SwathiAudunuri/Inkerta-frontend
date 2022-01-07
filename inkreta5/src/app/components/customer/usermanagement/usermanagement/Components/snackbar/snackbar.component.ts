import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserManaghementService } from '../../UserManagement.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  message: string="";

  constructor(private _snackBar: MatSnackBar,public usermanagementservice:UserManaghementService) {}

  openSnackBar() {
    this._snackBar.open(this.message);
  }
  ngOnInit() {
    this.usermanagementservice.message.subscribe((mess:any)=>{
      this.message = mess
    })
  }

}
