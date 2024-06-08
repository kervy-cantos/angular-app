import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  get<T>(url: string, options: Options): Observable<T> {
    return this.http.get<T>(url, options) as Observable<T>;
  }
}
