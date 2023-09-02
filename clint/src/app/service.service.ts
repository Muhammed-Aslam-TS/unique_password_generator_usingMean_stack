import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private ApiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  password(password: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}passwordGenerator`,
      JSON.stringify({password}),
      httpOptions
    )
  }
}
