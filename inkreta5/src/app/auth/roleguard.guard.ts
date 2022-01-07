import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {
  data:any
  constructor(private auth:AuthService,private store:Store){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.warn(this.auth.getRole())
      //console.warn((route.data.role))
      this.store.subscribe(data=>{
        this.data=data
        this.data=this.data.loginReducer.user.roles
      //console.warn(this.data)
      })

      return  route.data.role.includes(this.data)
  }
  
}
