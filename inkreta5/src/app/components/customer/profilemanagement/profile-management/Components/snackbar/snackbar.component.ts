import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileManagementService } from '../../profile-management.services'
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  message: string="";

  constructor(private _snackBar: MatSnackBar,public profilemanagementservice:ProfileManagementService) {}

  openSnackBar() {
    this._snackBar.open(this.message);
  }
  ngOnInit() {
    this.profilemanagementservice.message.subscribe((mess:any)=>{
      this.message = mess
    })
  }

}
