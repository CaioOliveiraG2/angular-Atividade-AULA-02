import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-compound-interests',
  templateUrl: './caio-compound-interests.component.html',
  styleUrls: ['./caio-compound-interests.component.css'],
})
export class CaioCompoundInterestsComponent implements OnInit {
  constructor() {}

  @Input() c: String;
  @Input() tx: String;
  @Input() time: String;

  ngOnInit() {}

  convertTaxa() {
    return 1 + Number(this.tx) / 100;
  }

  elevado() {
    return this.convertTaxa() ** Number(this.time);
  }

  acumulado() {
    return Number(this.c) * this.elevado();
  }
}
