import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FormsComponent } from '../forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

export const RoutesTable:
Routes =
[
  {path: 'form', component: FormsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productdetails/:productID', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [HomeComponent, NotFoundComponent, ProductComponent, ProductDetailsComponent, FormsComponent,],
  imports: [
     CommonModule,
      RouterModule, ReactiveFormsModule
  ],
  exports: [HomeComponent, NotFoundComponent, ProductComponent, ProductDetailsComponent, FormsComponent]
})
export class RouteModModule { }
