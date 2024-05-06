import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../@types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  constructor() {}

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }
}
