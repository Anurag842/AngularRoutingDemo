import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  products: Product[];
product : Product;
  constructor(private fb: FormBuilder) { }

  InsertProductForm: FormGroup;

  ngOnInit() {
    this.InsertProductForm = this.fb.group(
      {
        'productID': ['', Validators.required],
        'name' : [],
        'price' : [],
      }
    );
  }
OnInsertProduct()
{
 //console.log(this.InsertProductForm.value);
 this.products =
    [
      {productID: 10 , name : "Mouse" , price : 1000},
      {productID: 11 , name : "Plotter" , price : 1000},
      {productID: 12 , name : "Scanner" , price : 1000},
      {productID: 13 , name : "Printer" , price : 1000},
      {productID: 14 , name : "Monitor" , price : 1000}
    ];
 let product = this.InsertProductForm.value;
// alert(this.products.length);
 this.products.push(product);
 //alert(this.products.length);
}
}
