import { createAction, props } from "@ngrx/store";
import { Communication } from "../Model/Communication.model";

export const getCommList = createAction('[CommList] get commlist')

export const getCommlistSucess = createAction(
    '[CommList] get commlist success',
    (communications : ReadonlyArray<Communication>)=>({communications})
    // props<{ communications :ReadonlyArray<Communication>}>() 
    );


 export const addCommList = createAction(
     '[CommList] add commlist',
    //  (communications : Communication)=>({communications})
     props<{ communications: Communication}>()
 )  
 
 export const addCommListSucess = createAction(
     '[CommList] add Commlist Success',
    //  (communications: Communication)=>({communications})
     props<{ communications: Communication}>()
 )
 
  export const getCommListId = createAction('[CommListId] get CommlistId',props<{id:any}>())

  export const getComListIdSuccess =createAction(
    '[CommListId] get commlistid success',
    (communicationid : ReadonlyArray<Communication>)=>({communicationid})
  )

 export const updateCommList= createAction(
     '[CommList] update commlist ',
     props<{communications :Communication}>()
    //  props<{communications :Communication, id :Communication["recipientId"]}>()
 )
 export const updateCommListSucess= createAction(
    '[CommList] update commlist  Sucess',
    props<{communications :Communication}>()
)

export const changeCommListStatusInActive = createAction(
    '[CommList] statuschange inactive commlist ',
    props<{communications :Communication}>()
)
export const changeCommListStatusInActiveSucess = createAction(
    '[CommList] statuschange  inactive commlist Sucess ',
    props<{communications :Communication}>()
)
export const deleteComm = createAction(
    '[CommList] delete commlist',
    props<{communications : Communication}>()
)

export const deleteCommSuccess = createAction(
    '[CommList] delete commlist Success',
    props<{communications : Communication}>()
)