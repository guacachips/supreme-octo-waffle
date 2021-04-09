import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  @Input() subtitle: string = 'subtitle';

  constructor() { }

  ngOnInit(): void {
  }

}
