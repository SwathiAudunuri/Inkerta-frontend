import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { ServiceService } from '../service.service';
import {   emailerror, emailotp, emailotp_result, emailverfiy, emailverfiySuccess, emailverfiySuccesserror, gstinverfy, gstinverfySuccess, saveonbord, save_onbording_success } from './Actions';

@Injectable()
export class Effects{
    gstin$ = createEffect(()=>
        this.action$.pipe(
            ofType(gstinverfy),
            tap((data)=>console.log(data)),
            concatMap((gstin)=>
                this.dataService.invokeApi(gstin).pipe(
                    map((result)=>gstinverfySuccess(result)),
                    catchError((result)=>of(emailverfiySuccesserror(result)))
                )
            )
        )
    );
    constructor(private action$: Actions, private dataService: ServiceService) {}
    
}
@Injectable()
export class Effects1{
    emailverfy = createEffect(()=>
        this.action$.pipe(
        ofType(emailverfiy),
        tap((data)=>console.log(data)),
        concatMap((data)=>
            this.dataService.emailinvoke(data).pipe(
                map((result)=>emailverfiySuccess(result)),
                //  catchError((emailotpresult)=>of(emailerror(emailotpresult)))
            )
        )
    )
    );
    constructor(private action$: Actions, private dataService: ServiceService) {}
    
}
@Injectable()
export class Effects2{
    emailotpverfy = createEffect(()=>
        this.action$.pipe(
        ofType(emailotp),
        tap((data)=>console.log(data)),
        concatMap((data)=>
            this.dataService.emailotpinvoke(data).pipe(
                map((emailotpresult)=>emailotp_result(emailotpresult)),
                catchError((emailotpresult)=>of(emailerror(emailotpresult)))
            )
        )
    )
    );
    constructor(private action$: Actions, private dataService: ServiceService) {}
    
}
@Injectable()
export class Effect3{
    saveonbording = createEffect(()=>
        this.action$.pipe(
            ofType(saveonbord),
            tap((data)=>console.log(data)),
            concatMap((data)=>
                this.dataService.saveonbordinginvoke(data).pipe(
                    map((save_result)=>save_onbording_success(save_result))
                    // catchError((save_result)=>of())
                )
            )
        )
    );
    constructor(private action$: Actions, private dataService: ServiceService) {}
}