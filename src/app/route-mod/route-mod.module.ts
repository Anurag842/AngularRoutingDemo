import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

export const RoutesTable:
Routes =
[
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productdetails/:productID', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProductComponent, ProductDetailsComponent],
  imports: [
     CommonModule,
      RouterModule
  ],
  exports: [HomeComponent, NotFoundComponent, ProductComponent, ProductDetailsComponent]
})
export class RouteModModule { }
