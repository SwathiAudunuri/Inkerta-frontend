import { createAction,props } from '@ngrx/store';


export const SendRemindernull = createAction('[vendor Send Reminder] vendor Send Reminder to null') 

export const SendReminder= createAction('[vendor Send Reminder]vendor   Send Reminder',props<{url:any,data:any}>());

export const SendReminderSucess=createAction('[vendor Send Reminder]vendor  Send Reminder Success',
props<{result: any}>()
);