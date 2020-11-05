import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  login() {
    return this.http.get(`${this.baseUrl}auth/google`);
  }

}
