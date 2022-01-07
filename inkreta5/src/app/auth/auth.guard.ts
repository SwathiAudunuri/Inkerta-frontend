import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User } from "../models/user.model";
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,
    private readonly store: Store,
    private router:Router){}
    data1:any
    user:any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.log(localStorage.getItem('appUser'))
      
      this.store.pipe(take(1),).subscribe(s => {
         this.data1=s
       this.user=(this.data1.loginReducer.user)
        //console.log(this.user)
      })
       //     const x= localStorage.getItem('appUser')
   /* return x.pipe(
      take(1),
      map((res)=>{
        return res? true:false
     //console.log(res)
        if(res){
          return true
        }
        return this.router.createUrlTree([''])
      })
    )*/
    if(this.user.tokens){
      
    return true
    }
    return this.router.createUrlTree([''])

    //return true
  }
  
}
