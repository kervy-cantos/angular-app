import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from 'src/interfaces';
import { ProductComponent } from '../components/product/product.component';
import { PaginatorModule } from 'primeng/paginator';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [ProductComponent, NgFor, PaginatorModule],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  rows: number = 5;
  total: number = 0;

  onProductOutput(product: Product) {
    console.log(product);
  }

  onPaginatorChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }
  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.total = products.total;
      });
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
