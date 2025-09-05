import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() menuToggle = new EventEmitter<void>(); //sirve para emitir un evento personalizado desde un componente hijo hacia su componente padre, permitiendo que el padre reaccione cuando algo ocurre en el hijo.

  onMenuClick() {  
    this.menuToggle.emit(); //emitir un evento personalizado desde un componente hijo hacia su componente padre
  }
}
