import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/services/models/Product';
import { ProductCard } from "../../../shared/components/product-card/product-card";

@Component({
  selector: 'app-cards-container',
  imports: [CommonModule, ProductCard],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css'
})
export class CardsContainer implements AfterViewInit {
  isHoverLeft = false; 
  isHoverRight = false;

  /** Lista de productos obtenidos desde el servicio */
  products: Product[] = [];

  private splide!: Splide;

  @ViewChildren('slide') slides!: QueryList<ElementRef>;

  constructor(private productService: ProductService) {}

  /**
   * Se ejecuta después de que la vista ha sido inicializada.
   * Obtiene los productos y espera a que Angular renderice los slides antes de inicializar Splide.
   */
  ngAfterViewInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.listCard;

        // Esperar a que Angular pinte los slides
        this.slides.changes.subscribe(() => this.initSplide());
      },
      error: (err) => console.error('Error al cargar productos', err)
    });
  }

  /**
   * Inicializa el carrusel Splide y conecta los botones de navegación personalizados.
   */
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
      breakpoints: {
        1024: { perPage: 2 },
        768:  { perPage: 1 },
      }
    });
    this.splide.mount();

    // Conectar botones personalizados
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => this.splide.go('<'));
    if (nextBtn) nextBtn.addEventListener('click', () => this.splide.go('>'));
  }
}
