import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Product>();
  showMessage = false;
  product: Product = new Product();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.productCreated.emit(this.product);

    this.product = new Product();
    this.showMessage = true;

    // const obj = this;
    // setTimeout(function() {
    //   obj.showMessage = false;
    //   console.log(obj);
    //   console.log('showMessage reset to false.');
    // }, 5000);

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);
  }
}
