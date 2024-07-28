import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';
import { Observable, map } from 'rxjs';
import { OrderType } from '../types/order.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  products!: ProductType[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.api + 'tea')
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.api + `/tea?id=${id}`);
  }

  form(orderData: string): Observable<OrderType> {
    return this.http.post(environment.api + 'order-tea', orderData)
      .pipe(
        map((response) => {
          return response as OrderType;
        })
      );
  }
}