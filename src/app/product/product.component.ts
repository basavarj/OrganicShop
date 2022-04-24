import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() Product:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.Product)
  }
  showProductDetails(productId:number){
    console.log(productId)
    this.router.navigateByUrl('/product-details/' + productId)
  }
}
