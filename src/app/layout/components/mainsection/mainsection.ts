import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainsection',
  imports: [CommonModule],
  templateUrl: './mainsection.html',
  styleUrl: './mainsection.css'
})
export class Mainsection {
  @Input() collapsed = false; //Esa línea de código define una propiedad de entrada(forma de pasar datos desde un componente padre hacia un componente hijo) en Angular usando el decorador input
                              
}
