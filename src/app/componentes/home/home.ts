import { Component } from '@angular/core';
import { CardComponent } from "../card/card";

@Component({
  imports: [CardComponent],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  curtidas:number = 0;
  naoCurtidas:number = 0;
  curtir() {
    this.curtidas++;
  }
  naoGostei() {
    this.naoCurtidas++;
  }
}
