import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import Cookies from 'js-cookie';

const listOfUsers = [
  { email: 'patient@patient.com', password: '1234', role: 'patient' },
  { email: 'admin@admin.com', password: '1234', role: 'admin' },
  { email: 'doctor@doctor.com', password: '1234', role: 'doctor' },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-api.com/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { email: any; password: any }): Observable<any> {
    // Simulate API call with delay
    const { email, password } = credentials;

    const foundUser = listOfUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      Cookies.set('role', foundUser?.role);
      return of(foundUser).pipe(delay(1000)); // Simulate network delay
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(
        delay(1000)
      );
    }
    // return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  signup(user: { email: string; password: string }) {
    //some logic
    // return this.http.post(`${this.apiUrl}/signup`, user);
  }

  isLoggedIn() {
    return !!Cookies.get('role');
  }

  logout() {
    Cookies.remove('role');
  }
}
