import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: string = 'title';

  constructor() { }

  ngOnInit(): void {
  }

}