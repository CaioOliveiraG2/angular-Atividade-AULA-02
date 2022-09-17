import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-timer',
  templateUrl: './caio-timer.component.html',
  styleUrls: ['./caio-timer.component.css'],
})
export class CaioTimerComponent implements OnInit {
  counter = 0;

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  constructor() {}

  ngOnInit() {}
}
