import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  subscription: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.subscription = this.productsService.productCreated.subscribe(
      (productName: string) => {
        console.log('ProductDetailComponent - productCreated event handler:', productName);
      }
    );
  }

  applyBadge() {
    return this.product.isAvailable ? 'badge-primary' : 'badge-danger';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
