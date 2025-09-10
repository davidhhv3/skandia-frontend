import { Component, signal } from '@angular/core';
import {Home} from './layout/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('skandia-frontend-test');
}
