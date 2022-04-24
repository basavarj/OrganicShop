import { Component, OnInit } from '@angular/core';
import Categories from '../category.json';
import Prodcuts from '../products.json';
import { ProductComponent } from '../product/product.component';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    Categories: any = Categories;
    Prodcuts:any;

  constructor() { }
  allProducts(){
    this.Prodcuts=Prodcuts
  }
  categoryProducts(category:any){
    debugger;
    this.Prodcuts=Prodcuts;
    let filteredProdcuts = this.Prodcuts.filter((product:any)=>{
       return product.category==category;
    })
    this.Prodcuts = filteredProdcuts;
  }

  ngOnInit(){
    this.Prodcuts=Prodcuts
  }

}
