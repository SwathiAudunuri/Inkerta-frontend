import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public data:any[]=[
  {type:"Invoice",VendorName:"tecnics integration Technologies Private Limited",InvoiceNo:"15b81a05a5",id:"15b815b81a05a51a05a5",StatusOfInv:"paid",createdon:"18-AUG-2021",Amount: 50000,paidon :'18-DEC-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "Dr Reddys Laboratories",id: "Q@123",Date:"20-AUG-2021"},
  {type:"Task",title: "please completed onboarding process",id: "Tas@741",status:"inprogress",createdon:"19-SEP-2021",DueDate:"30-SEP-2021"},
  {type:"Invoice",VendorName:"Dr Reddys Laboratories",InvoiceNo:"15b81a0400",id:"15b81a0400",StatusOfInv:"unpaid",createdon:"22-AUG-2021",Amount: 100000,DueDate :'29-DEC-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "tecnics int pvt ltd",id: "Q@456",Date:"15-08-2021"},
  {type:"Task",title: "please attend the seminar",id: "Tas@123",status:"completed",createdon:"18-AUG-2021",completedon:"17-NOV-2021"},

  {type:"Invoice",VendorName:"tecnics integration Technologies Private Limited",InvoiceNo:"15b81a05a8",id:"15b81a05a8",StatusOfInv:"unpaid",createdon:"19-AUG-2021",Amount: 10000,DueDate :'17-DEC-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "DRL",id: "Q@124",Date:"20-08-2021"},
  {type:"Task",title: "please attend the meeting",id: "Tas@789",status:"inprogress",createdon:"22-SEP-2021",DueDate:"30-DEC-2021"},
  {type:"Invoice",VendorName:"Dr Reddys Laboratories",InvoiceNo:"15b81a05a5",id:"15b81a05a5",StatusOfInv:"paid",createdon:"02-AUG-2021",Amount: 50000,paidon :'27-DEC-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "tecnics int pvt ltd",id: "Q@457",Date:"15-08-2021"},
  {type:"Task",title: "please attend the seminar",id: "Tas@456",status:"completed",createdon:"18-SEP-2021",completedon:"17-DEC-2021"},

  {type:"Invoice",VendorName:"Dr Reddys Laboratories",InvoiceNo:"28b81a05a5",id:"28b81a05a5",StatusOfInv:"paid",createdon:"22-AUG-2021",Amount: 50000,paidon :'27-OCT-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "DRL",id: "Q@128",Date:"20-08-2021"},
  {type:"Task",title: "please attend the meeting",id: "Tas@987",status:"completed",createdon:"28-SEP-2021",completedon:"14-DEC-2021"},
  {type:"Invoice",VendorName:"tecnics integration Technologies Private Limited",InvoiceNo:"17b81a05a5",id:"17b81a05a5",StatusOfInv:"unpaid",createdon:"24-AUG-2021",Amount: 10000,DueDate :'27-SEC-2021',Action: ["Update status","Raise Query","History"]},
  {type:"Query",title: "tecnics int pvt ltd",id: "Q@458",Date:"15-08-2021"},
  {type:"Task",title: "please completed onboarding process",id: "Tas@963",status:"inprogress",createdon:"28-SEP-2021",DueDate:"14-DEC-2021"},
  ]
  
  data_view: any;
  details:any=this.data[0]
  page:number=1;
  sidenav:any=false;
  
  mess: any;
  totalRecords: any;
  id: any=this.data[0].id;
  display: string=this.data[0].type;
  constructor() { 
    this.data_view = this.data
    this.totalRecords=this.data_view.length;
  }
  search1:any
  ngOnInit(): void {
  }
  data1(value:any){
    console.log(value)
  }
  search(event:any){
    this.data_view=this.data.filter((product: any) =>
    product.title.toLocaleLowerCase().indexOf(event) !== -1);
    console.log(this.data_view.length)
    if(this.data_view.length === 0){
      this.mess="No Data Found"
    }
    else{
      this.mess=""
    }
  }
  filter(filtervalue:any){
    filtervalue = filtervalue.toLocaleLowerCase();
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
  invoke_invoice(value:any){
    this.id = value.id
    this.details = value
    this.display = "Invoice"
  }
  invoke_query(value:any){
    this.details = value
    this.id = value.id
    this.display = "Query"
  }
  invoke_task(value:any){
    this.details = value
    this.id = value.id
    this.display = "Task"
  }
}
