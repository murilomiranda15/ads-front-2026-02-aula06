import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card';

@Component({
  imports: [FormsModule, CardComponent],
  selector: 'app-games',
  styleUrl: './games.css',
  templateUrl: './games.html',
})
export class Games {
  items = [
    {"imagePathCard": "assets/images/fortnite.jpg", "textoImgAlt": "Fortnite", "tituloCard": "Fortnite", "textoCorpo": "Jogo de tiro em universo aberto", "textoBotao": "Saiba Mais"},
    {"imagePathCard": "assets/images/roblox.jpg", "textoImgAlt": "Roblox", "tituloCard": "Roblox", "textoCorpo": "Plataforma de jogos online", "textoBotao": "Saiba Mais"},
    {"imagePathCard": "assets/images/minecraft.jpg", "textoImgAlt": "Minecraft", "tituloCard": "Minecraft", "textoCorpo": "Jogo de construção e exploração", "textoBotao": "Saiba Mais"},
    {"imagePathCard": "assets/images/animes.jpg", "textoImgAlt": "Animes", "tituloCard": "Animes", "textoCorpo": "Catálogo de animes para assistir", "textoBotao": "Saiba Mais"}
  ];
}
