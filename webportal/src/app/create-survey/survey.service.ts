import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'jquery';
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

  listForm() {
    return this.http.get(`${this.baseUrl}api/form/list`);
  }

  getFormByShortCode(url_short_code) {
    return this.http.get(`${this.baseUrl}api/form/by_short_code`, {
      params: {
        url_short_code: url_short_code
      }
    });
  }

}
