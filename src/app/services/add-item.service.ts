import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  private baseUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  register(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bids`, formData);
  }

  getbids(): Observable<any> {
    return this.http.get(`${this.baseUrl}/annonces`);
  }

  getAnnonceById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/annonces/${id}`);
  }

  getoldbids(): Observable<any> {
    return this.http.get(`${this.baseUrl}/oldannonces`);
  }
  getAnnoncesByuserId(id :string): Observable<any>{
    return this.http.get(`${this.baseUrl}/annonces/user/${id}`);
  }
  getAnnoncesByCategorie(category: string): Observable<any> {
    // Make a POST request with the category in the request body
    return this.http.post<any>(`${this.baseUrl}/annonces/category`, { category });
  }
searchAnnoncesByKeyword(keyword: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/annonces/search`, { keyword });
}
}
