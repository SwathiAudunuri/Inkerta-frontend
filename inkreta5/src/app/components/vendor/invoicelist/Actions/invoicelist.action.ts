import { createAction,props } from '@ngrx/store';
import { InvoiceList } from '../models/invoicelist.model';

export const getInvoiceListInitialValue= createAction('[InvoiceList Initial Value null] Get InvoiceList');

export const getInvoiceListaction= createAction('[InvoiceList] Get InvoiceList',props<{url : string}>());

export const getInvoiceListSuccess=createAction('[InvoiceList] Get InvoiceList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{invoices:any}>()
);

