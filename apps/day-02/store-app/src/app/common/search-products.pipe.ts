import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts',
  pure: false
})
export class SearchProductsPipe implements PipeTransform {

  transform(products: Product[], searchText: string, fieldName: string): Product[] {
    if (searchText === '') {
      return products;
    }

    const filteredProducts = products.filter(
      product => product[fieldName].toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    );
    return filteredProducts;
  }

}
