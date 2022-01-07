import { createAction,props } from '@ngrx/store';

export const AttachmentTypeInitialValues= createAction('[AttachmentType]  AttachmentType Initial Values to NUll');

export const AttachmentType= createAction('[AttachmentType]  AttachmentType',props<{url : string}>());

export const AttachmentTypeSucess=createAction('[AttachmentType] AttachmentType Success',
props<{result: any}>()
);