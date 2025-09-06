import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-container',
  imports: [CommonModule],
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css'
})
export class CardsContainer {
  isHoverLeft = false;
  isHoverRight = false;

   // Tarjetas (pueden venir de un servicio o API)
  cards = [1, 2, 3, 4];

  // Índice de la tarjeta actual
  currentIndex = 0;

  get visibleCards() {
    // Siempre muestra 3 cards a partir del índice actual
    const total = this.cards.length;
    return [
      this.cards[this.currentIndex % total],
      this.cards[(this.currentIndex + 1) % total],
      this.cards[(this.currentIndex + 2) % total],
    ];
  }

  prevCard() {
    // retrocede cíclico
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  nextCard() {
    // avanza cíclico
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }
}

