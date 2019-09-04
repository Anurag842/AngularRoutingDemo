import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }

  products: Product[];
  name: string;
  prod
  LoadProducts()
  {
    this.products =
    [
      {productID: 10 , name : "Mouse" , price : 1000},
      {productID: 11 , name : "Plotter" , price : 1000},
      {productID: 12 , name : "Scanner" , price : 1000},
      {productID: 13 , name : "Printer" , price : 1000},
      {productID: 14 , name : "Monitor" , price : 1000}
    ];
  }

  GetProducts(): Product[]
  {
    this.LoadProducts();
    return this.products;
  }
  GetProductsByID( id: number): Product
  {
    let products = this.GetProducts();
    this.prod = this.products.find(i => i.productID == id);
    return this.prod;
  }
  AddProduct( product: Product)
  {
    let products = this.GetProducts();
    this.products.push(product);
  }
}
