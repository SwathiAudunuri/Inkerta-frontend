import { query } from '@angular/animations';
import { AfterViewInit, Component, OnInit,Output,EventEmitter, ViewChild, Input, QueryList } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { select, Store } from '@ngrx/store';
import { getcustomerQueryList } from '../../../Actions/querylist.action';
import { getcustomerqueryState } from '../../../Selectors/invoice.selector';
import { QueryService } from '../../query.service';
import { faPlusCircle,faReply} from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { data2 } from "./querydata.component";
// import { data, data3 } from 'src/app/components/users/data.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { data5,data6,data7 } from "./query.data1.component";
import { QueryState } from '../../../Reducers/querylist.reducers';
import { elementAt } from 'rxjs/operators';
import { cloneDeep } from 'lodash'
//import * as  cloneDeep from 'lodash/cloneDeep'

import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { BehaviorSubject } from 'rxjs';

export interface dataa{
  "id": Number,
	"queryRefId": string,
	"documentRefId": string,
	"createdDate": string,
	"createdBy": string,
	"queryType": string,
	"queryFrom": string,
	"queryText": string,
	"dispatchMode": string,
	"dispatchedOn": string,
	"isDispatched": string,
	"parentQueryRefId": string
    "children":Array<any>
}
@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
  })
export class QueryComponent implements OnInit{
    // constructor(private store:Store) { }
      // @Input() noofrows:any;
       btn_enable=false
       row:any
       id:any
       by:any
       queryText:any
       raisedon:any
       queries:any=null
       loading:any=true
       invoicenumber:any;
       suppliername:any
       subject:any;
      @Input() ref:any;
       @Output() respond :EventEmitter<any>=new EventEmitter()
       @Output() response :EventEmitter<any>=new EventEmitter()
       faPlusCircle:any=faPlusCircle
       faReply:any=faReply
       createdDate:any='createdDate'
  service: any;

 
    ngAfterContentInit(){
     // this.loadqueries()
     // //console.log(this.queries)

    }
  
 
 
  files: TreeNode[]=[];

cols: any[]=[];

constructor(private primengConfig: PrimeNGConfig,private store:Store<QueryState>,private queryService:QueryService,private unpaid:UnpaidService) {

 }
data4:TreeNode[]=[]
dataTransform(temp:any){
  let temp2:Array<dataa>= this.temp.data.children
      
  temp2.forEach(item=>{
    let temp2={"data":item}
    this.temp.data.children=(temp2)
    // if(this.temp.data.children.data){
    //   this.dataTransform(this.temp.data.children.data)
    // }
  })
 
}
temp:any
trans:TreeNode[]=[]
loadquery= new BehaviorSubject<boolean>(false)

getdata(){
  this.service = this.unpaid.loadquery.subscribe((ref)=>{
    this.store.dispatch(getcustomerQueryList({ref:ref}))
    this.loadquery.next(true)
  })

  this.loadquery.subscribe((l)=>{
    this.fetchqueries()
  
    // this.loadqueries()

  })
}
ngOnInit() {
    this.files = []


this.getdata()

    
 
  


    

    this.cols = [
        { field: 'subject', header: 'Subject' },
        { field: 'createdByDisplayName', header: 'Created By' },
        { field: 'createdDate', header: 'Created On' },




    ];
  this.primengConfig.ripple = true;
  // //console.log(this.files)
this.loading=false
}
fetchqueries(){
  
  this.store.select(getcustomerqueryState).subscribe(state=>{
    this.queries=null
    if(state){
    this.queries=cloneDeep(state?.results)
   
   this.loadqueries()
    }
  })
}
loadqueries(){
  
if(this.queries){
  const data=this.queries.queryresults
//console.warn(this.queries)
  this.invoicenumber=this.queries.invoiceheader.invoicenum
this.suppliername=this.queries.invoiceheader.Supplier_legal_name
this.files = []
  data.forEach((element:any) => { 
    // //console.log(element)
      
      this.files.push(element)
      // //console.log(this.files)
    })
 
 this.loading=false
 

// //console.log(this.files)
  }
  this.loadquery.complete()
}
selectedItems:any

lightclass:any
addColor(){
this.lightclass="lightclass"
}
  sendData(data:any) {
    
        // //console.log(data)
        this.btn_enable=true
        this.respond.emit(data)
        this.row=data
        this.id=this.row.queryid
        this.by=this.row.by
        this.queryText=this.row.queryText
        this.raisedon=this.row.raisedon
        this.subject=this.row.subject
      }
  btn_response(){
              this.response.emit()
          }
  ngOnDestroy() {
     
    this.service.unsubscribe()
            
   }

}