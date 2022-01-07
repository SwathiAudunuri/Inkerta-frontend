import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { getcustomercustomrolesdet } from '../../../Actions/roledetail.action';
import { getcustomercustomroledetails } from '../../../Selectors/customaction.selector';
import { CustomrolesService } from '../../customroles.service';


@Component({
  selector: 'app-roledetails',
  templateUrl: './roledetails.component.html',
  styleUrls: ['./roledetails.component.css']
})
export class RoledetailsComponent implements OnInit {

  constructor(private roleservice:CustomrolesService,private store:Store) { }
  @Input() edit:any
  @Input() newrole:any
  loadnewrole:any=false
  service1:any
  roledetail:any
  inputrequest:any

  new_role(){
    this.loadnewrole=true
  }
 
  loaddetail= new BehaviorSubject<boolean>(false)

 


  ngOnInit(): void {
 
    this.getAllrec()
  }
  getAllrec(){
    // loadactionssidenav= new BehaviorSubject<string>('')
   this.roleservice.loadrolessidenav.subscribe(data=>{
     //console.log("hii")
     //console.log(data)
     if(data){

      data=Constants.Customroledet+`${data}`
      //console.log(data)
      this.store.dispatch(getcustomercustomrolesdet({role_id:data}))

      this.loaddetail.next(true)
     }
    })
    this.loaddetail.subscribe((data:any)=>{
      this.store.select(getcustomercustomroledetails).subscribe((data)=>{
        this.roledetail=data.result
        if(data.result){
          if(this.roledetail.hasError===false){
            this.roledetail=this.roledetail.results
            //console.warn(this.roledetail)
          }
        }

      })

    })
  }
  sharedloadHandle(event:any){
    
    this.newrole=false
  }

  
}
