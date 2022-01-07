import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getcustomercustomrolesdetnull } from '../../../Actions/roledetail.action';
import { CustomrolesService } from '../../customroles.service';

@Component({
  selector: 'app-rolessidenav',
  templateUrl: './rolessidenav.component.html',
  styleUrls: ['./rolessidenav.component.css']
})
export class RolessidenavComponent implements OnInit {
  error: any;

  constructor(private  roleservice:CustomrolesService,public store:Store,private cdref: ChangeDetectorRef) { }
  arrow: any = true;
  editing:any=false
  @Input() newrole:any
  ngOnInit(): void {
    this.store.dispatch(getcustomercustomrolesdetnull())

    this.roleservice.error.subscribe((data)=>{
      // if(data){
        this.error = data
        this.cdref.detectChanges();
      // }
    })
  }

  closesidenav() {
    this.arrow = false
     this.roleservice.arrow.next(false)
  }
  closesidenav1() {
    this.arrow = true
    this.roleservice.arrow.next(true)
  } 
  edit(){
    this.editing=true
  }
}
