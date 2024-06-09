import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/interfaces';
import { ProductComponent } from '../components/product/product.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ProductComponent, NgFor],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}
  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product);
  }
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
      });
  }
}
