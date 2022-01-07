import { createAction,props } from '@ngrx/store';
import { InvoiceList } from '../models/invoicelist.model';

export const getExceptionInvoiceListInitialValue= createAction('[customerExceptionsInvoiceListInitialValue] Get Exceptions InvoiceList Initial Value');

export const getcustomerExceptionInvoiceList= createAction('[customerExceptionsInvoiceList] Get Exceptions InvoiceList',props<{url : string}>());

export const getcustomerExceptionInvoiceListSuccess=createAction('[customerExceptionsInvoiceList] Get Exceptions InvoiceList Success',

props<{invoices: any}>()
);

