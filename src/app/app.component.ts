import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniCalculadora';
  num1: number = NaN;
  num2: number = NaN;
  res: number = NaN;

  suma() {
    this.res = this.num1 + this.num2;
  }

  resta() {
    this.res = this.num1 - this.num2;
  }
}
