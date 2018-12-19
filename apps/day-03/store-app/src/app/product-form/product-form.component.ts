import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage = false;
  product: Product = new Product();

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productsService.addProduct(this.product);

    this.loggerService.log('ProductFormComponent.onSubmit() - productCreated event emitted.');

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
