import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {InvoiceList  } from '../models/invoicelist.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getInvoiceList } from '../Actions/invoicelist.action';

const ELEMENT_DATA: InvoiceList[] = [
    {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'New',Action:["Update status","Raise Query"]},
    {InvoiceNo : 2, Date: '1-11-21', VendorName: 'DRL', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"]},
    {InvoiceNo : 3, Date: '12-10-21', VendorName: 'DRL', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'New',Action:["Raise Query"] },
    {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
    {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"]},
    {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"]},
    {InvoiceNo : 7, Date: '12-10-21', VendorName: 'DRL', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Onhold',Action:["Raise Query"] },
    {InvoiceNo : 8, Date: '12-9-21', VendorName: 'DRL', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
    {InvoiceNo : 9, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"]},
  
  ];
export interface InvoiceListState{
    invoicelist:ReadonlyArray<InvoiceList>
}
const initialState :ReadonlyArray<InvoiceList>=[]
const _invoicelistReducer = createReducer(
  initialState,
  on(getInvoiceList, (state,action) => 
  {
      console.log(state)
  return{
     ...state,state:ELEMENT_DATA
  }

  }
  ),

 
);

export function invoiceListReducer(state:any, action:any) {
  return _invoicelistReducer(state, action);
}