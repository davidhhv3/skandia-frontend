import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  num1: number = 10;
  num2: number = 5;
  result: number = 0;

  sumar():void {
    this.result =  this.num1 + this.num2;
  }
  
}
