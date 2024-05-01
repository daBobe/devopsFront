import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }
  constructor(private http: HttpClient) { }

  register(userDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }
  login(nom: string, mdp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { nom, mdp })
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in by verifying if the user role exists in localStorage
    return !!localStorage.getItem('user');
  }

  logout(): void {
    // Clear the user role from localStorage to log out the user
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false);
  }
  getUserName(): any | null {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    return user ? user.nom   : null;
  }

  getUseId(): any | null {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    return user ? user._id   : null;
  }
}


