import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-cards-container',
  imports: [CommonModule],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css'
})
export class CardsContainer implements AfterViewInit{
  isHoverLeft = false;
  isHoverRight = false;

  private splide!: Splide;

  ngAfterViewInit(): void {
    this.splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      perMove: 1,
      arrows: false,
      pagination: false,
    });

    this.splide.mount();

    // conectar botones personalizados
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.splide.go('<'));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.splide.go('>'));
    }
  }

}

