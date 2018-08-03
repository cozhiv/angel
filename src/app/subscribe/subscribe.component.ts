import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  @Input('subGame') subGame;
  @Output() notification = new EventEmitter<string>();
  constructor() { }
  showSubscribtion() {
    console.log(`The id of the game is ${this.subGame.id}`);
    this.notification.emit('Gotovo, bace!');
  }
  ngOnInit() {
  }

}
