import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
