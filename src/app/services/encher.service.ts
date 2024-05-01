import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncherService {

  private baseUrl = 'http://localhost:5000'; // Replace this with your backend URL

  constructor(private http: HttpClient) { }

  createEncher(encherData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/enchers`, encherData);
  }

  getAllEnchers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/enchers`);
  }

  getEncherById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/enchers/${id}`);
  }

  updateEncher(id: string, encherData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/api/enchers/${id}`, encherData);
  }

  deleteEncher(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/enchers/${id}`);
  }

  getNumberOfEnchersByAnnonceId(annonceId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/enchers/annonce/${annonceId}`);
  }
  
  
}