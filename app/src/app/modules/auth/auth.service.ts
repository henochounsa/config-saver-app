import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  searchById(id: string) {
    //console.log('id', id);
    const headers = new HttpHeaders({
      contentType: 'application/json',
    });
    return this.httpClient.get(`${environment.ApiBaseUrl}/configs/${id}`, {
      headers: headers
    });
  }
}
