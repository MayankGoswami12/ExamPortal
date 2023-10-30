import { compileInjector } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn:'root'
})
export class adminGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){

  }
  canActivate(
  rout: ActivatedRouteSnapshot,
  state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{

  if(this.login.isLoggedIn() && this.login.getUserRole()=='ADMIN'){
  return true;
  }
  this.router.navigate(['login']);
  return false;
  }
}