import { createAction,props } from '@ngrx/store';
import { InvoiceListHistory } from '../models/invoicelisthistory.model'; 

export const getcustomerInvoiceListHistoryInitialValues= createAction('[customerInvoiceListHistoryInitialValues] Get InvoiceListHistory Initial Values');

export const getcustomerInvoiceListHistory= createAction('[customerInvoiceListHistory] Get InvoiceListHistory',props<{url : any}>());

export const getcustomerInvoiceListHistorySuccess=createAction('[customerInvoiceListHistory] Get InvoiceListHistory Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{data: any}>()
);

