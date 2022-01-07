import { createAction, props } from "@ngrx/store";


export const getvendorSupportingDocumentnull = createAction('[Get vendor Supporting Document null] Get vendor supporting document null')
export const getvendorSupportingDocument = createAction('[Get vendor Supporting Document] Get vendor supporting document',props<{url:any}>())

export const getvendorSupportingDocumentSuccess = createAction('[Get vendor supporting Document Success] Get vendor Supporting Document SuccessComponent',
    props<{data: any}>()
)