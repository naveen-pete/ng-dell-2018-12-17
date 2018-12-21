import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';

import { ProductDetailComponent } from './product-detail.component';
import { ProductsService } from '../services/products.service';

class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('ProductDetailComponent', () => {
  let fixture: ComponentFixture<ProductDetailComponent>;
  let component: ProductDetailComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ProductDetailComponent],
      providers: [
        ProductsService,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
  });

  it('should navigate the user to the `Not Found` component when an invalid product id is passed', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    fixture.detectChanges();

    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['/not-found']);
  });

});
