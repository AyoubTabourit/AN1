import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet, Routes} from "@angular/router";
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes:Routes=[
  {path:"products-list",component:ProductsListComponent},
  {path:"add-list",component:AddProductComponent},
  {path:"",redirectTo:"products-list",pathMatch:"full" }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

