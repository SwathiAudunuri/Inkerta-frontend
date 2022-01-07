import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  edit: boolean=false;

  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  edit_profile(){
    this.edit = true
  }
  cancel_btn(){
    this.router.navigate(['app/vendor_manager/dashboard/default'])
  }
  save(){
    this.edit = false
  }
  open_changepass(){
    const dialogRef = this.dialog.open(ChangePasswordComponent, { panelClass: 'custom-dialog-container',disableClose: true });
  }
}
