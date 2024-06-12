import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        localStorage.setItem('token', 'true');
        this.router.navigate(['/']);
      })
      .catch((error) => {
        alert('login error');
        this.router.navigate(['/login']);
      });
  }

  register(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        alert('register error');
        console.log(error);
        this.router.navigate(['/register']);
      });
  }

  logout() {
    this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }
}
