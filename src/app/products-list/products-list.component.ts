import { Component } from '@angular/core';
import {ProductModel} from "../Models/product.model";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
products:ProductModel[];
constructor() {
  this.products=[
    {productId:1,productName:"cheese",productPrice:34,dateCreation:new Date()},
  {productId:2,productName:"BREAD",productPrice:354,dateCreation:new Date()},
  {productId:3,productName:"MILK",productPrice:20,dateCreation:new Date()}
  ];
}
}
