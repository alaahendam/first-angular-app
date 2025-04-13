import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-api.com/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  signup(user: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  isLoggedIn() {
    return false
    // return !!localStorage.getItem('token'); // Simple check (use JWT in real apps)
  }
}
