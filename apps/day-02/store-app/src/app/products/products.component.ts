import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productId = 1;
  productName = 'Dell Inspiron 15 7000';
  productDescription = 'Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful';
  productPrice = 45000;
  productIsAvailable = true;

  onSave() {
    console.log('Save button clicked');
  }

  onChange(e) {
    console.log('input event triggered:', e.target.value);
  }
}
