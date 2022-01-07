import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getcustomercustomroles, nullcustomercustomroles } from '../../../Actions/customrole.action';
import { getcustomercustomrole } from '../../../Selectors/customaction.selector';
import { CustomrolesService } from '../../customroles.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-rolestab',
  templateUrl: './rolestab.component.html',
  styleUrls: ['./rolestab.component.css']
})
export class RolestabComponent implements OnInit {

  constructor(private store:Store,private roleservice:CustomrolesService) { }
  roles:any=[]
  name:any
  role_id:any
  page:number=1;
  pageSize:number = 8;
  service: any;
  service1: any;
  loadroles= new BehaviorSubject<boolean>(false)
  loading:any=true
  ngOnInit(): void {
    this.loadroles.next(true)
    this.roleservice.table.next(true)
    this.store.dispatch(nullcustomercustomroles())
    // this.service1= this.loadroles.pipe(switchMap((d)=>{
    //   if(d){
      this.roleservice.table.subscribe((data:any)=>{
        if(data){
          this.store.dispatch(getcustomercustomroles())
        }
      })
        

    //   return this.store.select(getcustomercustomrole)
    //   }
    //   else{
    //     return of(null);
    //   }
    // }))

    this.getAllrec()
 

  }
  getAllrec(){
    this.service=this.store.select(getcustomercustomrole).subscribe((data:any)=>{
      //console.log("error")
      //console.warn( data)
      if(data.result){
        this.loading=data.loading
        if(data.result?.res?.hasError){
         
         
        }
        else{
          if(data.result?.res?.results.length>0){
            this.roles=data.result?.res?.results
            this.role_id=''
            this.role_id=this.roles[0]?.roleId
            this.roleservice.loadrolessidenav.next(this.role_id)

            //console.log(this.roleservice)
          }
        }
      
      }
      if(this.roles.length === 0){
        this.roleservice.error.next(true)
        //console.log("sucess")
      }
      else{
        this.roleservice.error.next(false)
        //console.log("data is there")
      }
      

      
      
    })
    
  }
  invoke_invoice(item:any){
    this.role_id=item.roleId

    //console.log(this.role_id)
    this.roleservice.loadrolessidenav.next(this.role_id)
  }
   
ngOnDestroy() {

  this.service.unsubscribe()
  // this.service1.unsubscribe()
}
}
