import { createAction,props } from '@ngrx/store';
import { InvoiceList } from '../models/invoicelist.model';

export const getqueriesListInitialValue= createAction('[customer get queries] get queries InvoiceList Initial Value');

export const getqueriesInvoiceList= createAction('[customer get queries] get queries InvoiceList',props<{url : string}>());

export const getqueriesInvoiceListSuccess=createAction('[customer get queries] get queries InvoiceList Success',

props<{invoices: any}>()
);

