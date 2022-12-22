import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private httpClient: HttpClient) {}

  saveConfigs(configs: []) {
    //console.log('configs', configs);
    const headers = new HttpHeaders({
      contentType: 'application/json',
    });
    return this.httpClient
    .post(`${environment.ApiBaseUrl}/configs`, configs, {
      headers: headers,
      responseType: 'arraybuffer'
    })
  }
}
