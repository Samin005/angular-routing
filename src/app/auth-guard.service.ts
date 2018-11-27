import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }
  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          console.log('Should see servers.');
          return true;
        } else {
          console.log('Should not see servers.');
          this.snackBar.open('You must be logged in!', '', { duration: 4000});
          this.router.navigate(['/']);
        }
      }
    );
    return this.authService.loggedIn;
  }
  canActivateChild(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return this.canActivate(activatedRoute, routerState);
  }
}
