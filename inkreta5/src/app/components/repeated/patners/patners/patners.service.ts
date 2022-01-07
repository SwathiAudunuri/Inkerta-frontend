import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PatnersService {

    constructor() { }

    callgetdataapi = new BehaviorSubject<any>(null)
    partner_id = new BehaviorSubject<any>(null)

    error = new BehaviorSubject<any>(true)
    table_search= new BehaviorSubject<any>(true)

    title = new BehaviorSubject<any>(false)
}