import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../common/product";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // Returns an observable, Map the JSON data from Spring Data REST to Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

}

// Define the structure of the response from the backend for the JSON data
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}

