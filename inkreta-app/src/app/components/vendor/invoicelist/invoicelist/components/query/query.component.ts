import { query } from '@angular/animations';
import { AfterViewInit, Component, OnInit,Output,EventEmitter, ViewChild, Input, QueryList } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { select, Store } from '@ngrx/store';
import { getQueryList } from '../../../Actions/querylist.action';
import { queryselector } from '../../../Selectors/query.selector';
import { QueryService } from '../../query.service';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { data2 } from "./querydata.component";
// import { data, data3 } from 'src/app/components/users/data.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { data5,data6,data7 } from "./query.data1.component";
import { QueryState } from '../../../Reducers/querylist.reducers';
import { elementAt } from 'rxjs/operators';
import { cloneDeep } from 'lodash'

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
       @Output() respond :EventEmitter<any>=new EventEmitter()
       @Output() response :EventEmitter<any>=new EventEmitter()
    //   @ViewChild(MatPaginator, {static: false}) paginator:any;
    //   queries:any
       faPlusCircle:any=faPlusCircle
    //   temp:any
    // ngOnChanges() {
    //     this.store.subscribe(s=>{
    //         this.temp=s
    //         this.temp=this.temp.querylist.results
    //         console.log(this.temp)
    //         //this.data=this.temp
    //     })
    // }
    ngAfterContentInit(){
      this.loadqueries()
      console.log(this.queries)

    }
  // ngOnInit(): void {
  //   this.fetchAllQueries();
  // }
  // @ViewChild('angularGrid') angularGrid:any
 
  // data=  	[{
  //           "id": 27,
  //           "queryRefId": "1",
  //           "documentRefId": "I210331000491",
  //           "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           "createdBy": "000012",
  //           "createdByDisplayName": "Swathi adunuri",
  //           "queryType": "dispute",
  //           "queryFrom": "Vendor",
  //           "queryText": "This is test again",
  //           "dispatchMode": "mail",
  //           "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           "isDispatched": false,
  //           "parentQueryRefId": "",
 	//       },           
  //       {
  //                   "id": 30,
  //                   "queryRefId": "1.1",
  //                   "documentRefId": "I210331000491",
  //                   "createdDate": "2020-07-17T10:30:00.000+00:00",
  //                   "createdBy": "000012",
  //                   "createdByDisplayName": "Swathi adunuri",
  //                   "queryType": "dispute",
  //                   "queryFrom": "Vendor",
  //                   "queryText": "This is test 3 again 1.1",
  //                   "dispatchMode": "mail",
  //                   "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //                   "isDispatched": false,
  //                   "parentQueryRefId": "1",
                  
  //               },
  //               {
  //                 "id": 33,
  //                 "queryRefId": "1.1.1",
  //                 "documentRefId": "I210331000491",
  //                 "createdDate": "2020-07-17T10:30:00.000+00:00",
  //                 "createdBy": "000012",
  //                 "createdByDisplayName": "Swathi adunuri",
  //                 "queryType": "dispute",
  //                 "queryFrom": "Vendor",
  //                 "queryText": "This is test 3 again 1.1.1",
  //                 "dispatchMode": "mail",
  //                 "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //                 "isDispatched": false,
  //                 "parentQueryRefId": "1.1",
                
  //             },
  //               {
  //                   "id": 31,
  //                   "queryRefId": "1.2",
  //                   "documentRefId": "I210331000491",
  //                   "createdDate": "2020-07-17T10:30:00.000+00:00",
  //                   "createdBy": "000012",
  //                   "createdByDisplayName": "Swathi adunuri",
  //                   "queryType": "dispute",
  //                   "queryFrom": "Vendor",
  //                   "queryText": "This is test 3 again",
  //                   "dispatchMode": "mail",
  //                   "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //                   "isDispatched": false,
  //                   "parentQueryRefId": "1",
                 
  //               },
  //               {
  //                   "id": 35,
  //                   "queryRefId": "1.6",
  //                   "documentRefId": "I210331000491",
  //                   "createdDate": "2020-07-17T10:30:00.000+00:00",
  //                   "createdBy": "000012",
  //                   "createdByDisplayName": "Swathi adunuri",
  //                   "queryType": "dispute",
  //                   "queryFrom": "Vendor",
  //                   "queryText": "This is test 3 again",
  //                   "dispatchMode": "mail",
  //                   "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //                   "isDispatched": false,
  //                   "parentQueryRefId": "1",
                    
  //               },
  //               {
  //                 "id": 33,
  //                 "queryRefId": "2",
  //                 "documentRefId": "I210331000491",
  //                 "createdDate": "2020-07-17T10:30:00.000+00:00",
  //                 "createdBy": "000012",
  //                 "createdByDisplayName": "Swathi adunuri",
  //                 "queryType": "dispute",
  //                 "queryFrom": "Vendor",
  //                 "queryText": "This is test 3 again",
  //                 "dispatchMode": "mail",
  //                 "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //                 "isDispatched": false,
  //                 "parentQueryRefId": "",
                  
  //             },
  //             {
  //               "id": 34,
  //               "queryRefId": "2",
  //               "documentRefId": "I210331000491",
  //               "createdDate": "2020-07-17T10:30:00.000+00:00",
  //               "createdBy": "000012",
  //               "createdByDisplayName": "Swathi adunuri",
  //               "queryType": "dispute",
  //               "queryFrom": "Vendor",
  //               "queryText": "This is test 3 again",
  //               "dispatchMode": "mail",
  //               "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //               "isDispatched": false,
  //               "parentQueryRefId": "",
                
  //           },
  //           {
  //               "id": 34,
  //               "queryRefId": "2",
  //               "documentRefId": "I210331000491",
  //               "createdDate": "2020-07-17T10:30:00.000+00:00",
  //               "createdBy": "000012",
  //               "createdByDisplayName": "Swathi adunuri",
  //               "queryType": "dispute",
  //               "queryFrom": "Vendor",
  //               "queryText": "This is test 3 again",
  //               "dispatchMode": "mail",
  //               "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //               "isDispatched": false,
  //               "parentQueryRefId": "",
                
  //           },
  //           {
  //               "id": 35,
  //               "queryRefId": "2",
  //               "documentRefId": "I210331000491",
  //               "createdDate": "2020-07-17T10:30:00.000+00:00",
  //               "createdBy": "000012",
  //               "createdByDisplayName": "Swathi adunuri",
  //               "queryType": "dispute",
  //               "queryFrom": "Vendor",
  //               "queryText": "This is test 3 again",
  //               "dispatchMode": "mail",
  //               "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //               "isDispatched": false,
  //               "parentQueryRefId": "",
                
  //           },
  //           // {
  //           //     "id": 36,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },{
  //           //     "id": 37,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },
  //           // {
  //           //     "id": 38,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },{
  //           //     "id": 39,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },
  //           // {
  //           //     "id": 40,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },
  //           // {
  //           //     "id": 41,
  //           //     "queryRefId": "2",
  //           //     "documentRefId": "I210331000491",
  //           //     "createdDate": "2020-07-17T10:30:00.000+00:00",
  //           //     "createdBy": "000012",
  //           //     "createdByDisplayName": "Swathi adunuri",
  //           //     "queryType": "dispute",
  //           //     "queryFrom": "Vendor",
  //           //     "queryText": "This is test 3 again",
  //           //     "dispatchMode": "mail",
  //           //     "dispatchedOn": "2020-07-17T10:30:00.000+00:00",
  //           //     "isDispatched": false,
  //           //     "parentQueryRefId": "",
                
  //           // },
  //             ]


  // configs: any = {
  //   id_field: 'queryRefId',
  //   parent_id_field: 'parentQueryRefId',
  //   parent_display_field: 'id',
  //   actions: {

  //     },
  //   //   css: { // Optional
  //   //     expand_class: 'fas fa-angle-right',
  //   //     collapse_class: 'fa fa-caret-down',
  //   //   },
  //   columns: [
  //     {
  //       name: 'id',
  //       header: 'Query Id',
  //     },
  //     {
  //       name: 'createdByDisplayName',
  //       header: 'Name',
  //     },
  //     {
  //       name: 'queryType',
  //       header: 'Query Type',
  //     },
    
  //     {
  //       name: 'queryText',
  //       header: 'Query Text',
  //     },
  //     {
  //       name: 'createdBy',
  //       header: 'Created By',
  //     },
  //     {
  //       name: 'queryFrom',
  //       header: 'Query From',
  //     }
  //   ],
   
  // };

 

  // collapseAll() {
  //   this.angularGrid.collapseAll();
  // }

  // expandAll() {
  //   this.angularGrid.expandAll();
  // }
  // selectedrow($event:any){
  //     console.log($event)
  // }
  files: TreeNode[]=[];

cols: any[]=[];

constructor(private primengConfig: PrimeNGConfig,private store:Store<QueryState>,private queryService:QueryService) {

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
ngOnInit() {
 //console.log(data.results)
    this.files = []
//  this.queryService.getAllQuery().subscribe(element=>{
//   let data=element
//   this.queries=data
//   let  temp:[]=this.queries.results
//   console.log(this.queries.results)
//   temp.forEach(element => {

//     this.files.push(element)

//     console.log(temp)

//   });
//   this.loading=true

// })

    this.store.dispatch(getQueryList())
    

 
    this.fetchqueries()
  
    //this.loadqueries()
     console.log(this.queries)
 
    // if(this.queries ){
    //  console.log(this.queries)
    
    //    const data:[]=this.queries.results
    //     console.warn(data+`xxxxxxxxxxxxxxxxxxdata`)
    //      if(data){
    //      data.forEach(element => {
 
       
    //     this.files.push(element)


    //  });}
    // }
    

    this.cols = [
        { field: 'createdByDisplayName', header: 'Name' },
        { field: 'queryText', header: 'Text' },
        { field: 'queryFrom', header: 'From' },
        { field: 'createdBy', header: 'By' },
        { field: 'createdDate', header: 'Created Date' },



    ];
  this.primengConfig.ripple = true;
  console.log(this.files)
this.loading=false
}
fetchqueries(){
  
  this.store.subscribe(state=>{
    this.queries=cloneDeep(state.querylist)
    console.warn(state.querylist)
  })
}
loadqueries(){
  this.queries=this.queries.results
  this.queries = Object.assign([], this.queries);

//  const data=data7.results.queryresults
  const data=this.queries.queryresults
console.log(this.queries)
  this.invoicenumber=this.queries.invoiceheader.invoicenum
this.suppliername=this.queries.invoiceheader.Supplier_legal_name
  // this.queries.forEach((element:any) => { 
  // console.log(element)
    
  //   this.files.push(element)
  //   console.log(this.files)
  // })
  data.forEach((element:any) => { 
    console.log(element)
      
      this.files.push(element)
      console.log(this.files)
    })
 
 this.loading=false
  // this.files = data6.results
  // this.files=this.queries

console.log(this.files)

}
selectedItems:any

lightclass:any
addColor(){
this.lightclass="lightclass"
}
  sendData(data:any) {
    
        console.log(data)
        this.btn_enable=true
        this.respond.emit(data)
        this.row=data
        this.id=this.row.queryid
        this.by=this.row.by
        this.queryText=this.row.queryText
        this.raisedon=this.row.raisedon
    }
  btn_response(){
              this.response.emit()
          }
   
  // fetchAllQueries(){
  //        this.store.dispatch(getQueryList())
  //     }
}