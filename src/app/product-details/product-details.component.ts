import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routePrams = this.route.snapshot.paramMap;
    const productId = Number(routePrams.get('productId'));

    this.product = products.find((x) => x.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product has been successfully added to the cart');
  }
}
