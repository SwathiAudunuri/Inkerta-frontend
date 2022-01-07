import { createAction,props } from '@ngrx/store';

export const getcustomerInvoiceListQrCodenull= createAction('[customerInvoiceListQRcode] Get InvoiceList QRCode null')

export const getcustomerInvoiceListQrCode= createAction('[customerInvoiceListQRcode] Get InvoiceList QRCode',props<{doc_refid : string}>());

export const getcustomerInvoiceListQrCodeSuccess=createAction('[customerInvoiceListQRcode] Get InvoiceList QRCode Success',
props<{qrcode: any}>()
);