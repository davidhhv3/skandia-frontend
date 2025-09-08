import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Mainsection } from '../components/mainsection/mainsection';
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Mainsection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  /** Indica si la barra lateral está colapsada */
  sidebarCollapsed = false;

  /**
   * Cambia el estado de colapso de la barra lateral.
   */
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
