import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/game';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<Game>;
  isShown: Boolean = false;
  name: String;
  constructor() {
    this.games = [
      {
        id: 1,
        title: 'First Game',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bear_Alaska_(3).jpg'
      },
      {
        id: 2, title: 'Second Game',
        image: 'https://natgeo.imgix.net/factsheets/thumbnails/Article%20-%20Starving%20Polar%20Bear%20Photographer%20Explains.jpg?auto=compress,format&w=1024&h=560&fit=crop'
      }];
  }
  showContacts() {
    this.isShown = !this.isShown;
  }
  showName(name) {
    this.name = name;
    console.log(name);
  }
  notify(something: string) {
    console.log(something);
  }
  ngOnInit() {
  }

}
