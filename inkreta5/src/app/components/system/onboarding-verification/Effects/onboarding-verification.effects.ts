import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getDocument, getDocumentSuccess } from "../Actions/GetDocument.action";
import { getpartnersDetails, getpartnersDetailsSuccess } from "../Actions/GetPartnerDetails.actions";
import { getpartners, getpartnersSuccess } from "../Actions/GetPartners.actions";
import { SetStatus, SetStatusSuccess } from "../Actions/SetStatus.actions";

@Injectable()
export class OnboardVerificationEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    GetPatners=createEffect(()=>
        this.action.pipe(
            ofType(getpartners),
            //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(partners=>
                    (getpartnersSuccess({partners}))              
                ))
            )
        )
    )

    GetPatnerDetails=createEffect(()=>
        this.action.pipe(
            ofType(getpartnersDetails),
            //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(details=>
                    (getpartnersDetailsSuccess({details}))              
                ))
            )
        )
    )

    GetDocument=createEffect(()=>
        this.action.pipe(
            ofType(getDocument),
            //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(doc=>
                    (getDocumentSuccess({doc}))              
                ))
            )
        )
    )

    SetStatus=createEffect(()=>
        this.action.pipe(
            ofType(SetStatus),
            //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(status=>
                    (SetStatusSuccess({status}))              
                ))
            )
        )
    )
}