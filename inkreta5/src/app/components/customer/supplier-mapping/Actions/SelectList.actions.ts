import { createAction,props } from '@ngrx/store';

export const SelectListInitialValue= createAction('[Select List Initial Value] Select List Initial Value');

export const SelectList= createAction('[Select List',props<{url : string}>());

export const SelectListSuccess=createAction('[Select List]  Success',props<{selectlist: any}>());

