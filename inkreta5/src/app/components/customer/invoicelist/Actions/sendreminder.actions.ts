import { createAction,props } from '@ngrx/store';


export const SendRemindernull = createAction('[Send Reminder] Send Reminder to null') 

export const SendReminder= createAction('[Send Reminder]  Send Reminder',props<{url:any,data:any}>());

export const SendReminderSucess=createAction('[Send Reminder] Send Reminder Success',
props<{result: any}>()
);