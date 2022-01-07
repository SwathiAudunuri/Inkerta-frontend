import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { getActiondetailnull } from '../Actions/actiondetail.action';
import { addcustomercustomactionsnull, getcustomercustomactions, nullcustomercustomactions } from '../Actions/customaction.action';
import { getstatusandrolenull } from '../Actions/statusandrole.action';
import { CustomactionService } from './customaction.service';

@Component({
  selector: 'app-customaction',
  templateUrl: './customaction.component.html',
  styleUrls: ['./customaction.component.css']
})
export class CustomactionComponent implements OnInit {
  arrow: any=false;

  constructor(public dialog: MatDialog,private store:Store,private customservice:CustomactionService,private cdref: ChangeDetectorRef) { }
  sidenav1:boolean=true;
  sidenav:boolean=true;
  newaction:any=false
  ngOnInit() {    
    // this.store.dispatch(nullcustomercustomactions())
    // this.store.dispatch(getActiondetailnull())
    // this.store.dispatch(getstatusandrolenull())
    // this.store.dispatch(addcustomercustomactionsnull())
    
    this.store.dispatch(getcustomercustomactions())
    this.customservice.arrow.subscribe((data=>{
      this.arrow = data
      this.cdref.detectChanges();
    }))
    this.customservice.newaction.subscribe((data:any)=>{
      this.newaction = data
      this.cdref.detectChanges();
    })
  }
  left_sidenav_full(){
    this.sidenav1 = false
  }
  left_sidenav_half(){
    this.sidenav1 = true
  }
  new_action(){
    //console.log(this.newaction)
    this.newaction = true
    this.customservice.newaction.next(true)
    this.customservice.newaction.subscribe(data=>{
      this.newaction=data
    })
    
  }
  ngOnDestroy() {
      this.store.dispatch(getActiondetailnull())
      this.store.dispatch(nullcustomercustomactions())
      this.store.dispatch(getstatusandrolenull())
      this.store.dispatch(addcustomercustomactionsnull())
  }

}
