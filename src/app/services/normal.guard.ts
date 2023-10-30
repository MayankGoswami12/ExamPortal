import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class normalGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(this.login.isLoggedIn() && this.login.getUserRole()=='Normal'){
      return true;
  }
  this.router.navigate(['login']);
  return false;
  
 }
}