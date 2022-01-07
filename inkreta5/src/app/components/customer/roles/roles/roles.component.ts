import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NewroleComponent } from './Components/newrole/newrole.component';
import { CustomrolesService } from './customroles.service';
import {nullcustomercustomroles,addcustomercustomrolesnull } from '../Actions/customrole.action'
import { getcustomercustomrolesdetnull } from '../Actions/roledetail.action';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor( private store:Store,public dialog: MatDialog,private roleservice: CustomrolesService) { }
  
  sidenav1:boolean=true;
  sidenav:boolean=true;
  newrole:boolean=false
  ngOnInit() {
    // this.store.dispatch(nullcustomercustomroles())
    // this.store.dispatch(addcustomercustomrolesnull())
    // this.store.dispatch(getcustomercustomrolesdetnull())
  }
  left_sidenav_full(){
    this.sidenav1 = false
  }
  left_sidenav_half(){
    this.sidenav1 = true
  }
  new_role(){
    this.newrole=!this.newrole
    this.roleservice.newrole.next(true)
    this.roleservice.newrole.subscribe(data=>{
      this.newrole=data
    })
  }
  ngOnDestroy() {
    this.store.dispatch(nullcustomercustomroles())
    this.store.dispatch(addcustomercustomrolesnull())
    this.store.dispatch(getcustomercustomrolesdetnull())
  }
}
