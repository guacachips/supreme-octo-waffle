import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() content: string = 'chip content';

  constructor() { }

  ngOnInit(): void {
  }

}
