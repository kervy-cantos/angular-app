import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Pagination, Products } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private api: ApiService) {}
  getProducts(url: string, params: Pagination): Observable<Products> {
    return this.api.get(url, {
      params,
      responseType: 'json',
    }) as Observable<Products>;
  }
}
