import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;


  createForm(data) {
    return this.http.post(`${this.baseUrl}api/form/add`, data);
  }
}
