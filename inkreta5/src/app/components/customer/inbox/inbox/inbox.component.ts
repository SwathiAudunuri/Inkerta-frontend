import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getcustomerInvoiceListDetails } from '../../invoicelist/Actions/invoicelistdetails.actions';
import { getcustomerInvoiceListHistory } from '../../invoicelist/Actions/invoicelisthistory.actions';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public data:any[]=[
  {type:"Invoice",doc_ref_id:"I210323000346",VendorName:"Indian Insurance Company Pvt Ltd",title:"Indian Insurance Company Pvt Ltd",InvoiceNo:"NICE/CTD3",id:"15b815b81a05a51a05a5",StatusOfInv:"New",createdon:"18-AUG-2021",Amount: 50000,DueDate :'18-DEC-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "ksr_solutions",id: "Q@123",status:"raised",Date:"20-AUG-2021"},
  {type:"Task",title: "Invoice details needs to be filled up",assignby:"Ashok",id: "Tas@741",status:"inprogress",createdon:"19-SEP-2021",DueDate:"30-SEP-2021",taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},
  {type:"Invoice",doc_ref_id:"I210324000369",VendorName:"Dynamic Health Care Pvt Ltd",title:"Dynamic Health Care Pvt Ltd",InvoiceNo:"inv99",id:"15b81a0400",StatusOfInv:"Onhold",createdon:"22-AUG-2021",Amount: 100000,DueDate :'29-DEC-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "sigma_solution",id: "Q@456",Date:"15-AUG-2021",status:"solved"},
  {type:"Task",title: "Please review the invoice",assignby:"Chandra",id: "Tas@123",status:"completed",createdon:"18-AUG-2021",DueDate:"17-NOV-2021", taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},

  {type:"Invoice",doc_ref_id:"I210323000348",VendorName:"Indian Insurance Company Pvt Ltd",title:"Indian Insurance Company Pvt Ltd",InvoiceNo:"NICE/CTD5",id:"15b81a05a8",StatusOfInv:"Onhold",createdon:"19-AUG-2021",Amount: 10000,DueDate :'17-DEC-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "Dynamic Health Care Pvt Ltd",id: "Q@124",Date:"20-AUG-2021",status:"raised"},
  {type:"Task",title: "Re-check for invoice clarification",assignby:"Ashok",id: "Tas@789",status:"inprogress",createdon:"22-SEP-2021",DueDate:"30-DEC-2021",taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},
  {type:"Invoice",doc_ref_id:"I210324000356",VendorName:"Sigma Solutions",title:"Sigma Solutions",InvoiceNo:"sa",id:"15b81a05a5",StatusOfInv:"New",createdon:"02-AUG-2021",Amount: 50000,DueDate :'27-DEC-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "Indian Insurance Company Pvt Ltd",id: "Q@457",Date:"15-AUG-2021",status:"solved"},
  {type:"Task",title: "Please review the invoice",assignby:"Chandra",id: "Tas@456",status:"completed",createdon:"18-SEP-2021",DueDate:"17-DEC-2021",taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},

  {type:"Invoice",doc_ref_id:"I210319000290",VendorName:"KSR Solutions",title:"KSR Solutions",InvoiceNo:"TEST210319000290",id:"28b81a05a5",StatusOfInv:"New",createdon:"22-AUG-2021",Amount: 50000,DueDate :'27-OCT-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "ksr_solutions",id: "Q@128",Date:"20-AUG-2021",status:"raised"},
  {type:"Task",title: "Re-check for invoice clarification",assignby:"Ashok",id: "Tas@987",status:"completed",createdon:"28-SEP-2021",DueDate:"14-DEC-2021",taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},
  {type:"Invoice",doc_ref_id:"I210323000346",VendorName:"Dynamic Health Care Pvt Ltd",title:"Dynamic Health Care Pvt Ltd",InvoiceNo:"NICE/CTD3",id:"17b81a05a5",StatusOfInv:"Onhold",createdon:"24-AUG-2021",Amount: 10000,DueDate :'27-SEC-2021',Date: '12-1-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title:"Customer on boarding is not working properly",vendername: "Dynamic Health Care Pvt Ltd",id: "Q@458",Date:"15-AUG-2021",status:"solved"},
  {type:"Task",title: "Please review the invoice",assignby:"Chandra",id: "Tas@963",status:"inprogress",createdon:"28-SEP-2021",DueDate:"14-DEC-2021",taskRefId: 89012,assignedTo: "Swathi","createdOn": "2021-04-27T05:53:08.843+00:00","description": "desc","dueDate": "2021-04-21","flag": false,"priority": "medium","createdBy": null,"taskActivities": [{"action": "","actionOn": "2021-07-06T17:18:13.183+00:00","comments": "","id": 66,"actionBy": "010002"}]},
  ]
  public updaterow=this.fb.group({
    title:[''],
    assignedTo:[''],
    priority:[''],
    dueDate:[''],
    status:[''],
    description:[''],
    comments:[''],
    // taskRefId:['']
  })
  rowindex =""


  data_view: any;
  details:any=this.data[0]
  page:number=1;
  sidenav:any=true;
  sort=""
  mess: any;
  totalRecords: any;
  id: any=this.data[0].id;
  display: string=this.data[0].type;
  edits:any = false
  doc_ref_id: any;
  constructor(private fb:FormBuilder , private store:Store) { 
    this.data_view = this.data
    this.totalRecords=this.data_view.length;
  }
  search1:any
  ngOnInit(): void {
    this.store.dispatch(getcustomerInvoiceListDetails({doc_refid : "I210323000346"}))
    // this.store.dispatch(getcustomerInvoiceListHistory({doc_refid : "I210323000346"}))
  }
  ngDoCheck(){
    // //console.log(this.sidenav)
  }
  data1(value:any){
    //console.log(value)
  }
  search(event:any){
    //console.log(this.search1)
    if(event == ""){
      this.data_view = this.data
    }
    else{
      this.data_view=this.data_view.filter((product: any) =>
      product.title.toLocaleLowerCase().indexOf(this.search1) !== -1);
      //console.log(this.data_view.length)
      if(this.data_view.length === 0){
        this.mess="No Data Found"
      }
      else{
        this.mess=""
      }
    }
  }
  filter(filtervalue:any){
    filtervalue = filtervalue.toLocaleLowerCase();
    this.sort = filtervalue
    if(filtervalue === 'all'){
      this.data_view = this.data
    }
    else{
      this.data_view= this.data.filter((product: any) =>
        product.type.toLocaleLowerCase().indexOf(filtervalue) !== -1);
      this.search1=""
    }
    if(this.data_view.length === 0){
      this.mess="No Data Found"
    }
    else{
      this.mess=""
    }
  }
  // sortinvoice(event:any){
  //   //console.log(this.search1)
  //   this.data_view=this.data_view.filter((product: any) =>
  //   product.status.indexOf(event) !== -1);
  //   if(this.data_view.length === 0){
  //     this.mess="No Data Found"
  //   }
  //   else{
  //     this.mess=""
  //   }
  // }
  invoke_invoice(value:any){
    this.sidenav= true
    this.id = value.id
    this.details = value
    this.display = "Invoice"
    this.doc_ref_id = value.doc_ref_id
    //console.log(this.doc_ref_id)
    this.store.dispatch(getcustomerInvoiceListDetails({doc_refid : this.doc_ref_id}))
    // this.store.dispatch(getcustomerInvoiceListHistory({doc_refid : this.doc_ref_id}))
  }
  invoke_query(value:any){
    this.sidenav= true
    this.details = value
    this.id = value.id
    this.display = "Query"
  }
  invoke_task(value:any){
    this.rowindex = value.taskRefId
    this.updaterow.patchValue({
      title:value.title,
      assignedTo:value.assignedTo,
      priority:value.priority,
      dueDate:value.dueDate,
      status:value.status,
      description:value.description,
      comments:value.comments
    })
    this.sidenav= true
    this.details = value
    this.id = value.id
    this.display = "Task"
  }
  todo_edit(){
    this.edits = true
  }
  backsidenav(){
    this.sidenav = false
  }
}
