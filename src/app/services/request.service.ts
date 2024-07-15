import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';
import { Observable, map } from 'rxjs';
import { OrderType } from '../types/order.type';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  products!: ProductType[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  form(orderData: string): Observable<OrderType> {
    return this.http.post('https://testologia.ru/order-tea', orderData)
      .pipe(
        map((response) => {
          return response as OrderType;
        })
      );
  }
}