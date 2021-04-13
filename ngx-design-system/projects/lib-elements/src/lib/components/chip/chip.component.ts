import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChipComponent implements OnInit {

  @Input() content: string = 'chip content';

  constructor() { }

  ngOnInit(): void {
  }

}
