import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { getcustomercustomactions, nullcustomercustomactions } from '../../../Actions/customaction.action';
import { getcustomercustomaction } from '../../../Selectors/customaction.selector';
import { CustomactionService } from '../../customaction.service';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-customactions',
  templateUrl: './customactions.component.html',
  styleUrls: ['./customactions.component.css']
})
export class CustomactionsComponent implements OnInit {
  // mainArraydesc: never[];
  // dateToggle: number;

  constructor(private store:Store,private actionservice:CustomactionService) { }
  actions:any=[]
  name:any
  action_id:any
  page:number=1;
  pageSize:number = 8;
  service: any;
  service1: any;
  loadactions= new BehaviorSubject<boolean>(false)
  faCogs:any=faCogs
  dateToggle: number = 1
  dueDateToggle:number = 1
  sidenav:any
  loading:any=true
  
  ngOnInit(): void {
    this.loadactions.next(true)
    this.actionservice.arrow.subscribe((l)=>{
      this.sidenav=l
    })
    this.store.dispatch(nullcustomercustomactions())

    this.service1= this.loadactions.pipe(switchMap((d)=>{
      if(d){
        this.store.dispatch(getcustomercustomactions())

      return this.store.select(getcustomercustomaction)
      }
      else{
        return of(null);
      }
    }))

    this.getAllrec()
 

  }
  getAllrec(){
    this.service=this.service1.subscribe((data:any)=>{
      if(data.result){
        //console.warn(data)
        this.loading=data.loading
      this.actions=data.result?.res?.results
        
      this.action_id=this.actions[0]?.action_id
      this.actionservice.loadactionssidenav.next(this.action_id)

      }
      if(this.actions.length === 0){
        this.actionservice.error.next(true)
      }
      else{
        this.actionservice.error.next(false)
      }
    })
  }
  invoke_invoice(item:any){
    this.action_id=item.action_id

    this.name=item
    this.actionservice.loadactionssidenav.next(item.action_id)
  }

  amountToggle: number = 1;

  mainArraydesc:any
  connectorSort() {
    this.mainArraydesc = []
    this.amountToggle = 1;
    this.dueDateToggle = 1;
    if(this.dateToggle < 3){
      this.dateToggle = this.dateToggle + 1;
      }
      else if(this.dateToggle === 3){
        this.dateToggle = this.dateToggle - 1;
      }
    const clonedData = cloneDeep(this.actions);
    clonedData.sort(function (a: any, b: any) {
      var nameA = a.action_connector_type // ignore upper and lowercase
      var nameB = b.action_connector_type
  //    return (a.action_connector_type.toUpperCase) - (b.action_connector_type.toUpperCase);
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;

    });
    if( this.dateToggle === 2){
      this.actions = clonedData
    }
    else if(this.dateToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.actions = this.mainArraydesc
    }
  }
  action_nameSort() {
    this.mainArraydesc = []
    this.amountToggle = 1;
    this.dateToggle = 1
    if(this.dueDateToggle < 3){
      this.dueDateToggle = this.dueDateToggle + 1;
      }
      else if(this.dueDateToggle === 3){
        this.dueDateToggle = this.dueDateToggle - 1;
      }
    const clonedData = cloneDeep(this.actions);
    clonedData.sort(function (a: any, b: any) { 
      var nameA = a.createdbydisplayname// ignore upper and lowercase
      var nameB = b.createdbydisplayname
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
      //return  (a.createdbydisplayname) - (b.createdbydisplayname);
    });
    if( this.dueDateToggle === 2){
      this.actions = clonedData
    }
    else if(this.dueDateToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.actions = this.mainArraydesc
    }
  }

 
ngOnDestroy() {

  this.service.unsubscribe()
  // this.service1.unsubscribe()
}

}
