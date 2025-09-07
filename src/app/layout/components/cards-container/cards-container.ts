import { Component, AfterViewInit , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/services/models/Product';
import {  ProductCard } from "../../../shared/components/product-card/product-card";

@Component({
  selector: 'app-cards-container',
  imports: [CommonModule,ProductCard],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css'
})
export class CardsContainer implements OnInit,AfterViewInit{
  isHoverLeft = false;
  isHoverRight = false;

  products: Product[] = [];
  private splide!: Splide;
  

  constructor(private productService: ProductService) {}


ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.listCard; 

        // Esperar a que Angular pinte los productos
        setTimeout(() => this.initSplide());
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
      }
    });
  }

  ngAfterViewInit(): void {
    // Conectar botones personalizados una sola vez
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => this.splide.go('<'));
    if (nextBtn) nextBtn.addEventListener('click', () => this.splide.go('>'));
  }

  private initSplide(): void {
    if (this.splide) {
      this.splide.destroy();
    }

    this.splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
      //gap: '1rem',
      breakpoints: {
        1024: { perPage: 2 },
        768:  { perPage: 1 },
      }
    });
    this.splide.mount();
  }
}

