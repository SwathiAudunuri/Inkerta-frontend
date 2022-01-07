import { createAction,props } from '@ngrx/store';
import { InvoiceList } from '../models/invoicelist.model';

export const getcustomerInvoiceListInitialValue= createAction('[customerInvoiceListInitialValue] Get InvoiceList Initial Value');

export const getcustomerInvoiceList= createAction('[customerInvoiceList] Get InvoiceList',props<{url : string}>());

export const getcustomerInvoiceListSuccess=createAction('[customerInvoiceList] Get InvoiceList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{invoices: any}>()
);

