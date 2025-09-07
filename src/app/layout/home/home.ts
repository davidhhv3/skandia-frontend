import { Component } from '@angular/core';
import {Header} from '../components/header/header';
import {Mainsection} from '../components/mainsection/mainsection';
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header,Mainsection,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}
