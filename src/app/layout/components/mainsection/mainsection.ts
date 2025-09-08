import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveCard } from "../objective-card/objective-card";
import { CardsContainer } from "../cards-container/cards-container";

@Component({
  selector: 'app-mainsection',
  imports: [CommonModule,ObjectiveCard,CardsContainer],
  templateUrl: './mainsection.html',
  styleUrl: './mainsection.css'
})
export class Mainsection {
  @Input() collapsed = false; //Esa línea de código define una propiedad de entrada(forma de pasar datos desde un componente padre hacia un componente hijo) en Angular usando el decorador input                              
}
