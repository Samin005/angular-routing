import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
  }
  onLogin() {
    this.authService.onLogIn();
    this.snackBar.open('You have logged in!', '', {
      duration: 2000,
      panelClass: ['green-snackbar']
    });
  }
  onLogout() {
    this.authService.onLogOut();
    this.snackBar.open('You have logged out!', '', {
      duration: 2000,
      panelClass: ['red-snackbar']
    });
    this.router.navigate(['/']);
  }
}
