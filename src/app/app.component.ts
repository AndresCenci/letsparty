import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  mostrar = false;
  audio;

  constructor() {
    this.audio = new Audio('../sound/WhatIsLove.mp3');
  }

  click() {
    console.log('Party!');
    this.audio.loop = true;
    this.audio.play();
    this.mostrar = true;
  }
}
