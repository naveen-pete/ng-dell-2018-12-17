import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: Product = new Product();

  products: Product[] = [
    {
      id: 1,
      name: 'Dell Inspiron 15 7000',
      description: 'Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful',
      price: 45000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Dell Vostro',
      description: 'Vostro description',
      price: 35000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dell XPS',
      description: 'Dell XPS description',
      price: 95000,
      isAvailable: true
    }
  ];

  currencyCode = 'INR';

  applyBadge(product) {
    return product.isAvailable ? 'badge-primary' : 'badge-danger';
  }

  onSubmit() {
    this.products.unshift(this.product);
    this.product = new Product();
  }
}
