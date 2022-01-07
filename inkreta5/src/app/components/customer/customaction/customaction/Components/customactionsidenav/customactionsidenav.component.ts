import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getActiondetail, getActiondetailnull } from '../../../Actions/actiondetail.action';
import { CustomactionService } from '../../customaction.service';

@Component({
  selector: 'app-customactionsidenav',
  templateUrl: './customactionsidenav.component.html',
  styleUrls: ['./customactionsidenav.component.css']
})
export class CustomactionsidenavComponent implements OnInit {
  error: any;

  constructor(private cdref: ChangeDetectorRef,private  actionservice:CustomactionService,public store:Store) { }
  arrow: any = true;
  @Input() newaction:any
  ngOnInit() {
    this.store.dispatch(getActiondetailnull())
    this.actionservice.loadactionssidenav.subscribe(data=>{
      if(data){
 
       data=Constants.CustomActionsDetails+`/${data}`
       //console.log(data)
       this.store.dispatch(getActiondetail({action_id:data}))
      //  this.loaddetail.next(true)
      }
     })
     this.actionservice.error.subscribe((data)=>{
       this.error = data
       this.cdref.detectChanges();
     })
     this.actionservice.newaction.subscribe((data:any)=>{
          this.newaction = data
          this.cdref.detectChanges();
    })
  }

 
  closesidenav() {
    this.arrow = false
    //console.log("in")
    this.actionservice.arrow.next(false)
  }
  closesidenav1() {
    this.arrow = true
    //console.log("in1")
    this.actionservice.arrow.next(true)
  }
  edit(){

  }

}
