import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getUsersForward, getUsersForwardnull } from '../../../Actions/GetUsersForForward.actions';
import { loginState, usersforforwardState } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-userselection',
  templateUrl: './userselection.component.html',
  styleUrls: ['./userselection.component.css']
})
export class UserselectionComponent implements OnInit {
  users: any;
  displayedColumns: string[] = ['Select','Name','Roles'];
  public ELEMENT_DATA: any 
  dataSource: any;
  id: any;
  loading: any;
  constructor(public store:Store,private unpaid:UnpaidService,public dialogRef: MatDialogRef<UserselectionComponent>) { }

  ngOnInit() {
    this.store.dispatch(getUsersForwardnull())
    this.store.dispatch(getUsersForward({url:Constants.UsersForward}))
    this.store.select(usersforforwardState).subscribe((data)=>{
      // //console.log(data)
      this.loading = data.loading
      if(data.result){
        if(data.result.result.hasError){

        }
        else{
          this.users = data.result.result.results
          //console.log(this.users)
          this.dataSource =new MatTableDataSource<any>(this.users);
        }
      }
    })
   
  }
  value_userid(value:any){
    //console.log(value.user_id)
    this.id = value.user_id
  }
  userid(){
    this.unpaid.forwarduserid.next(this.id)
    this.close()
  }
  close(){
    this.dialogRef.close()
  }

}
