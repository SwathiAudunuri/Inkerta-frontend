import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InvoiceListState } from '../../invoicelist/Reducers/invoicelist.reducers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoicedetails',
  templateUrl: './invoicedetails.component.html',
  styleUrls: ['./invoicedetails.component.css']
})
export class InvoicedetailsComponent implements OnInit {

  constructor(private store:Store<InvoiceListState>,private route: ActivatedRoute) { }
  invoicelist=this.store.select('invoicelist')
  id:any=''
  data:any=[]
  active=1
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.invoicelist.subscribe(s => {
     this.data=s
     this.data=this.data.state
   //   this.user=(this.data1.loginReducer.user.tokens)
      
   console.log(this.data.state)

   })
   console.log(this.data)
  }


  

}
