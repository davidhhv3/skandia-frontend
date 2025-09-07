import { Component,Input  } from '@angular/core';
import { Product } from "../product-card/../../../core/services/models/Product";

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
}
