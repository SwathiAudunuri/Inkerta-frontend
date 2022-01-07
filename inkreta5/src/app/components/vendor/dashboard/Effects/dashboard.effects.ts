import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { valuesIn } from "lodash";
import { of } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getclosedinvfromcompany, getclosedinvfromcompanySuccess } from "../Actions/closedinvfromcompany.action";
import { getcompanyclosedsummary, getcompanyclosedsummarySuccess } from "../Actions/closedsummarycompany.action";
import { getcompanytable, getcompanytableSuccess } from "../Actions/company.action";
import { getcompanyactivities, getcompanyactivitiesSuccess } from "../Actions/companyactivities.action";
import { getcompanycontactdetails, getcompanycontactdetailsSuccess } from "../Actions/companycontactdetails.action";
import { getcompanysummary, getcompanysummarySuccess } from "../Actions/companysummary.action";
import { getvendorInvoiceListHistory, getvendorInvoiceListHistorySuccess } from "../Actions/history.action";
import { getMetrics, getMetricsSuccess } from "../Actions/metrics.action";
import { gettopten, gettoptenSuccess } from "../Actions/top10.action";
import { gettotalcompaniesclosedinvlist, gettotalcompaniesclosedinvlistSuccess } from "../Actions/totalcompaniesclosedinvlist.action";
import { gettotalcompanieslist, gettotalcompanieslistSuccess } from "../Actions/totalcompanieslist.action";
import { gettotalcompaniesstat, gettotalcompaniesstatSuccess } from "../Actions/totalcompanystat.action";



@Injectable()
export class dashboardVendorEffects{ 
    constructor(private action:Actions,private common:CommonService,private store:Store){

    }
    
    loaddashboardEffects$=createEffect(()=>
        this.action.pipe(
            ofType(getMetrics),
             //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>
            this.common.getAllRecords({url : Constants.Getvendormetrics}
                
                ).pipe(
                map(result=>
                    {
                    
                    return (getMetricsSuccess({result:result}))
                    }               
                    ))
            )
        )
    )
    loadtoptenEffects$=createEffect(()=>
    this.action.pipe(
        ofType(gettopten),
         //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>
        this.common.getAllRecords({url : Constants.Getcustomerstopten}
            
            ).pipe(
            map(result=>
                {
                
                return (gettoptenSuccess({result:result}))
                }               
                ))
        )
    )
)

loadhistory$=createEffect(()=>
        this.action.pipe(
            ofType(getvendorInvoiceListHistory),
            // //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.common.getAllRecords({url : value.url}).pipe(
                map(data=>

                    (getvendorInvoiceListHistorySuccess({data}))
                                    
                    ))
            )
        )

)

loadtotalcompanieslistEffects$=createEffect(()=>
this.action.pipe(
    ofType(gettotalcompanieslist),
     tap((data)=>console.log(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Gettotalcompaniestable}
        
        ).pipe(
        map(result=>
            {
            
            return (gettotalcompanieslistSuccess({result:result}))
            }               
            ))
    )
)
)

loadtotalcompaniesstatEffects$=createEffect(()=>
this.action.pipe(
    ofType(gettotalcompaniesstat),
     tap((data)=>console.log(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Gettotalcompaniesstat}
        
        ).pipe(
        map(result=>
            {
            
            return (gettotalcompaniesstatSuccess({result:result}))
            }               
            ))
    )
)
)

loadcompanytableEffects$=createEffect(()=>
this.action.pipe(
    ofType(getcompanytable),
     tap((data)=>console.warn(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getcompanydetailintable +value.id}).pipe(
        map(result=>
            {
            
            return (getcompanytableSuccess({result:result}))
            }               
            ))
    )
)
)

loadcompanysummaryEffects$=createEffect(()=>
this.action.pipe(
    ofType(getcompanysummary),
     tap((data)=>console.log(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getcompanysummary +value.id}
        
        ).pipe(
        map(result=>
            {
            
            return (getcompanysummarySuccess({result:result}))
            }               
            ))
    )
)
)
loadcompanycontactdetailsEffects$=createEffect(()=>
this.action.pipe(
    ofType(getcompanycontactdetails),
     tap((data)=>console.log(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getcompanycontactdetails+value.id}).pipe(
        map(result=>
            {
            
            return (getcompanycontactdetailsSuccess({result:result}))
            }               
            ))
    )
)
)
loadcompanyactivityEffects$=createEffect(()=>
this.action.pipe(
    ofType(getcompanyactivities),
     tap((data)=>console.log(data)),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getcompanyactivities+value.id}).pipe(
        map(result=>
            {
            
            return (getcompanyactivitiesSuccess({result:result}))
            }               
            ))
    )
)
)
loadclosedsummaryEffects$=createEffect(()=>
this.action.pipe(
    ofType(getcompanyclosedsummary),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getclosedreceivablessummary}).pipe(
        map(result=>
            {
            
            return (getcompanyclosedsummarySuccess({result:result}))
            }               
            ))
    )
)
)
loadcopmanyinvclosedlistEffects$=createEffect(()=>
this.action.pipe(
    ofType(gettotalcompaniesclosedinvlist),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getclosedreceivablescompanylist}).pipe(
        map(result=>
            {
            
            return (gettotalcompaniesclosedinvlistSuccess({result:result}))
            }               
            ))
    )
)
)
loadinvlistfromcompanyEffects$=createEffect(()=>
this.action.pipe(
    ofType(getclosedinvfromcompany),
    mergeMap((value:any)=>
    this.common.getAllRecords({url : Constants.Getpaidinvreceiblesfromcompany+ value.id}).pipe(
        map(result=>
            {
            
            return (getclosedinvfromcompanySuccess({result:result}))
            }               
            ))
    )
)
)
}


