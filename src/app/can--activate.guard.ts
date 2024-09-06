import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authser: AuthenticationService, private myserve: RouterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     let user = sessionStorage.getItem('uname')
     let pass = sessionStorage.getItem('pass')
    if (user == null && pass== null) {
      this.myserve.routeToLogin();

    }
    else{
      return true
    }

   }
}

