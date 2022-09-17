import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-compound-interests',
  templateUrl: './caio-compound-interests.component.html',
  styleUrls: ['./caio-compound-interests.component.css'],
})
export class CaioCompoundInterestsComponent implements OnInit {
  @Input() c: string;
  @Input() i: string;
  @Input() n: string;

  constructor() {}

  ngOnInit() {}
}
