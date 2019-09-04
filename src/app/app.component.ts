import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { GetProductsService } from './get-products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Route-Demo';
  products: Product[];
  product: Product;
  constructor(private prodService: GetProductsService){}
  ngOnInit(): void
  {
  }
}
