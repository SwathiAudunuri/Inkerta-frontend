import { createAction, props } from "@ngrx/store";


// export const getVendorinvoiceAttachments = createAction('[Get vendor Invoice Attachments] Get vendor Attachments',props<{doc_refid : string}>());

export const getVendorinvoiceAttachmentsnull = createAction('[Get vendor Invoice Attachments null] Get vendor Attachments null')

export const getVendorinvoiceAttachments = createAction('[Get vendor Invoice Attachments] Get vendor Attachments',props<{url : string}>());

export const getVendorinvoiceAttachmentsSuccess = createAction('[Get vendor Invoice Attachments Success] Get vendor Attachments Success',
props<{data: any}>()
);
