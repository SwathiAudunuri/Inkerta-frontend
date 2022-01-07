import { createAction,props } from '@ngrx/store';

export const getvendorInvoiceListQrCodenull= createAction('[vendorInvoiceListQRcode null] Get vendor InvoiceList QRCode null')
export const getvendorInvoiceListQrCode= createAction('[vendorInvoiceListQRcode] Get vendor InvoiceList QRCode',props<{doc_refid : any}>());

export const getvendorInvoiceListQrCodeSucess=createAction('[vendorInvoiceListQRcode] Get vendor InvoiceList QRCode Success',
props<{qrcode: any}>()
);