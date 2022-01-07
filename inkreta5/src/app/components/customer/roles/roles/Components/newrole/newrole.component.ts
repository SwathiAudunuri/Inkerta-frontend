import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addcustomercustomroles, addcustomercustomrolesnull, nullcustomercustomroles } from '../../../Actions/customrole.action';
import { getaddedrole } from '../../../Selectors/customaction.selector';
import { CustomrolesService } from '../../customroles.service';
@Component({
  selector: 'app-newrole',
  templateUrl: './newrole.component.html',
  styleUrls: ['./newrole.component.css']
})
export class NewroleComponent implements OnInit {
  loading: any=false;
  service1: any;

  constructor(private roleservice:CustomrolesService,public _myFB:FormBuilder,private store:Store,private _http:HttpClient) { }
  @Input() newrole:any
  data:any
  response=false
  errorMessage:any
  error=false
  roleForm = this._myFB.group({
    roleName: ['',[Validators.required]],
    roleDescription: ['',[Validators.required]],

  })
  ngOnInit(): void {
    this.store.dispatch(addcustomercustomrolesnull())
  //console.warn(this.newrole)
  this.service1 = this.store.select(getaddedrole).subscribe((data:any)=>{
    this.loading = data.loading
    //console.log(data)
    if(data?.postresult){
      if(data?.postresult?.hasError){

      }
      else{
        //console.log("done")
        this.cancel()
        this.roleservice.table.next(true)
      }
    }
  })
  }
  Submit(){
    //console.log(this.roleForm.value)
    var obj={       

      "roleName": this.roleForm.value.roleName,

      "roleDescription": this.roleForm.value.roleDescription  

  }
    this.store.dispatch(addcustomercustomroles({data:obj}))
    
    this.store.dispatch(nullcustomercustomroles())


  }
  cancel(){
    this.roleservice.newrole.next(false)
   
  }
  ngOnDestroy() {
    this.service1.unsubscribe()
    this.store.dispatch(addcustomercustomrolesnull())
  }
}
