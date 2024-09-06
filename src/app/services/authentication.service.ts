import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpcli: HttpClient) { }

  authenticateUser(data: any): Observable<any> {
    return this.httpcli.post('http://127.0.0.1:7070/registerstatus', data);

  }

  setBearerToken(token: string) {
    sessionStorage.setItem('mytoken', token);

  }

  getBearerToken() {
    return sessionStorage.getItem('mytoken');

  }

}







