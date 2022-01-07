import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Additional_Details, Additional_DetailsSuccess } from "../Actions/Additonal_details.actions";
import { AddGstin, AddGstinSuccess } from "../Actions/Add_gstin.actions";
import { getProfileDetails, getProfileDetailsSuccess } from "../Actions/GetProfileDetails.actions";
import { SaveProfile, SaveProfileSucess } from "../Actions/saveprofiledetails.actions";



@Injectable()
export class ProfileManagementEffects {
    constructor(private action: Actions, private service: CommonService, private store: Store) {
    }

    GetProfile = createEffect(() =>
        this.action.pipe(
            ofType(getProfileDetails),
            // tap((url:any)=>{//console.log(url)}),
            mergeMap((url) => this.service.getAllRecords(url).pipe(
                map(details => (getProfileDetailsSuccess({ details }))))
            )
        )
    )

    AdditionalDetails = createEffect(() =>
        this.action.pipe(
            ofType(Additional_Details),
            // tap((url:any)=>{//console.log(url)}),
            mergeMap((url) => this.service.getAllRecords(url).pipe(
                map(details => (Additional_DetailsSuccess({ details }))))
            )
        )
    )

    AddGstin = createEffect(() =>
        this.action.pipe(
            ofType(AddGstin),
            mergeMap((url) => this.service.getAllRecords(url).pipe(
                map(details => (AddGstinSuccess({ details }))))
            )
        )
    )

    Saveprofile=createEffect(()=>
    this.action.pipe(
        ofType(SaveProfile),
        mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
            map(result=>
                (SaveProfileSucess({result}))              
            ))
        )
    )
    )
}