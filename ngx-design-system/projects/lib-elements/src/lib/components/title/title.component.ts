import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent implements OnInit {

  @Input() title: string = 'title';

  constructor() { }

  ngOnInit(): void {
  }

}
