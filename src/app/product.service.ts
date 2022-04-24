import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  // showProductDetails(){
  //   return this.httpClient.get('./products.json');
  // }

}
