import { createAction,props } from '@ngrx/store';
import { InvoiceListHistory } from '../models/invoicelisthistory.model'; 


export const getInvoiceListHistorynull= createAction('[InvoiceListHistory null] Get InvoiceListHistory null')

export const getInvoiceListHistory= createAction('[InvoiceListHistory] Get InvoiceListHistory',props<{url : any}>());

export const getInvoiceListHistorySuccess=createAction('[InvoiceListHistory] Get InvoiceListHistory Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{data:any}>()
);

