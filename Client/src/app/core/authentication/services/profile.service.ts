import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:4300/api'; 

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
    });

    return this.http.get<any>(`${this.apiUrl}/profile`, { headers });
  }
}