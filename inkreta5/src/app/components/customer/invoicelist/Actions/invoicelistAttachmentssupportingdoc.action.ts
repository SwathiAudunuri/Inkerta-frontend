import { createAction, props } from "@ngrx/store";

export const getSupportingDocumentnull = createAction('[Get Supporting Document null] Get supporting document null')

export const getSupportingDocument = createAction('[Get Supporting Document] Get supporting document',props<{url:any}>())

export const getSupportingDocumentSuccess = createAction('[Get supporting Document Success Get Supporting Document SuccessComponent',
    props<{data: any}>()
)