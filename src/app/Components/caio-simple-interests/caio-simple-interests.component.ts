import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-simple-interests',
  templateUrl: './caio-simple-interests.component.html',
  styleUrls: ['./caio-simple-interests.component.css'],
})
export class CaioSimpleInterestsComponent implements OnInit {
  @Input() c: string;
  @Input() i: string;
  @Input() t: string;

  constructor() {}

  ngOnInit() {}

  convertPorcentagem() {
    return Number(this.i) / 100;
  }

  jurosSimples() {
    return Number(this.c) * this.convertPorcentagem() * Number(this.t);
  }
}
