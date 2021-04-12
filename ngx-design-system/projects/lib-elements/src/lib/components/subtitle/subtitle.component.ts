import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SubtitleComponent implements OnInit {

  @Input() subtitle: string = 'subtitle';

  constructor() { }

  ngOnInit(): void {
  }

}
