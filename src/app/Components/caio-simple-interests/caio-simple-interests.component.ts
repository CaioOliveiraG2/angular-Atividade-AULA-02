import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-simple-interests',
  templateUrl: './caio-simple-interests.component.html',
  styleUrls: ['./caio-simple-interests.component.css'],
})
export class CaioSimpleInterestsComponent implements OnInit {
  @Input() c: String;
  @Input() tx: String;
  @Input() time: String;
  constructor() {}

  ngOnInit() {}

  convertPorcentagem() {
    return Number(this.tx)/100;
  }

  jurosSimples() {
    return Number(this.c) * this.convertPorcentagem() * Number(this.time);
  }
}
