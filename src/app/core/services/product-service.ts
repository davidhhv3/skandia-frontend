import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Product } from "./models/Product";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ listCard: Product[] }> {
    return this.http.get<{ listCard: Product[] }>(this.apiUrl);
  }
 
}
