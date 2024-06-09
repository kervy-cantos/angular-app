import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/interfaces';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  standalone: true,
  imports: [RatingModule, FormsModule, NgFor],
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }
}
