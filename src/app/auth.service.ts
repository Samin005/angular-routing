import {MatSnackBar} from '@angular/material';

export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }
  onLogIn() {
    this.loggedIn = true;
    console.log('Logged In!');
  }
  onLogOut() {
    this.loggedIn = false;
    console.log('Logged out.');
  }
}
