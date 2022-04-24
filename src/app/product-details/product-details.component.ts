import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Prodcuts from '../products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  filterProduct:any;
  Prodcuts:any = Prodcuts;
  constructor( private _router: Router, private _activatedRoute: ActivatedRoute) { }
  public parameterValue:any;

  ngOnInit() {
    this._activatedRoute.params.subscribe(parameter => {
      this.parameterValue = parameter;
    });
    this.filterProduct = this.Prodcuts.find((ele:any)=>{
        return ele.id==this.parameterValue.id;
    })
  }
}
