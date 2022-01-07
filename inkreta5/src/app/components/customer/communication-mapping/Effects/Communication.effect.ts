import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { addCommList, addCommListSucess, changeCommListStatusInActive, changeCommListStatusInActiveSucess, deleteComm, deleteCommSuccess, getComListIdSuccess, getCommList, getCommListId, getCommlistSucess, updateCommList, updateCommListSucess } from "../Action/Communication.action";
import { RecService } from "../communication.service";
import { Communication } from "../Model/Communication.model"

@Injectable()
export class CommunicationEffects{
    constructor (private action$ :Actions,private communicationservice :RecService){}

    loaddata$= createEffect(()=>{
        return this.action$.pipe(ofType(getCommList),
        //tap((data)=>//console.log(data)),
        concatMap(()=>{
            return this.communicationservice.getRec().pipe(
                map((communications)=>getCommlistSucess(communications))
            )
        })
        )
    })

  

    adddata$= createEffect(()=>{
        return this.action$.pipe(ofType(addCommList),
        //tap((data)=>//console.log(data)),
        concatMap((newcomm)=>{
            return this.communicationservice.postRec1(newcomm).pipe(
                map((communicationadd)=>addCommListSucess(communicationadd))
            )
        })
        )
    })

    updatedata$= createEffect(()=>{
        return this.action$.pipe(ofType(updateCommList),
        //tap((data)=>//console.log(data)),
        concatMap((updatecomm,id)=>{
            return this.communicationservice.updateRec1(updatecomm,id).pipe(
                map((communicationupdate)=>updateCommListSucess(communicationupdate))
            )
        })
        )
    })
    getdataid$= createEffect(()=>{
        return this.action$.pipe(ofType(getCommListId),
        //tap((data)=>//console.log(data)),
        concatMap((id)=>{
            return this.communicationservice.getdatabyid1(id.id).pipe(
                map((communicationgetid)=>getComListIdSuccess(communicationgetid))
            )
        })
        )
    })

    statusinactivedata$= createEffect(()=>{
        return this.action$.pipe(ofType(changeCommListStatusInActive),
        //tap((data)=>//console.log(data)),
        concatMap((data)=>{
            return this.communicationservice.changeStatusInactive1(data.communications).pipe(
                map((communicationstatus)=>changeCommListStatusInActiveSucess(communicationstatus))
            )
        })
        )
    })
    deletedata$= createEffect(()=>{
        return this.action$.pipe(ofType(deleteComm),
        //tap((data)=>//console.log(data)),
        concatMap((data)=>{
            return this.communicationservice.deleteRec1(data.communications).pipe(
                map((communicationdelete)=>deleteCommSuccess(communicationdelete))
            )
        })
        )
    })
}

