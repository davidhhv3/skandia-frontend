import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  /** Evento que notifica al componente padre que se hizo clic en el menú */
  @Output() menuToggle = new EventEmitter<void>();

  /**
   * Se ejecuta al hacer clic en el botón de menú.
   * Emite el evento menuToggle hacia el componente padre.
   */
  onMenuClick(): void {
    try {
      this.menuToggle.emit();
    } catch (err) {
      console.error('Error al emitir el evento menuToggle', err);
    }
  }
}
