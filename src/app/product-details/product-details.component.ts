import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private _ActivatedRoute: ActivatedRoute, private _router: Router) { }
  products: Product[];

  ngOnInit()
  {
    this.products =
    [
      {productID: 10 , name : "Mouse" , price : 1000},
      {productID: 11 , name : "Plotter" , price : 1000},
      {productID: 12 , name : "Scanner" , price : 1000},
      {productID: 13 , name : "Printer" , price : 1000},
      {productID: 14 , name : "Monitor" , price : 1000}
    ];
     
    this.id = this._ActivatedRoute.snapshot.params['productID'];
    alert(this.id);
   //  let products=this._productService.getProducts();
    this.product = this.products.find(p => p.productID == this.id);

  }
  onBack(): void {
    this._router.navigate(['product']);
 }

}
