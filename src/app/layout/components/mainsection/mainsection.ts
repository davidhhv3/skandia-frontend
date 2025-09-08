import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveCard } from "../objective-card/objective-card";
import { CardsContainer } from "../cards-container/cards-container";

@Component({
  selector: 'app-mainsection',
  imports: [CommonModule, ObjectiveCard, CardsContainer],
  templateUrl: './mainsection.html',
  styleUrl: './mainsection.css'
})
export class Mainsection {
  /** Indica si la sección principal está colapsada (dato recibido desde el componente padre) */
  @Input() collapsed = false;
}
