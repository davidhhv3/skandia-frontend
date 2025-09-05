import { Component } from '@angular/core';
import {Header} from '../components/header/header';
import {Mainsection} from '../components/mainsection/mainsection';

@Component({
  selector: 'app-home',
  imports: [Header,Mainsection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
