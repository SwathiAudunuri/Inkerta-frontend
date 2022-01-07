import { createAction, props } from "@ngrx/store";

export const getCustomerinvoiceAttachmentsnull = createAction('[Get Customer Invoice Attachments null] Get Attachments null')
export const getCustomerinvoiceAttachments = createAction('[Get Customer Invoice Attachments] Get Attachments',props<{url : any}>());

export const getCustomerinvoiceAttachmentsSuccess = createAction('[Get Customer Invoice Attachments Success] Get Attachments Success',
props<{data: any}>()
);
