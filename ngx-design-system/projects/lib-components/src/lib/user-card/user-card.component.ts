import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() picture: string = 'https://bit.ly/3t5HOHz';
  @Input() description: string = 'incognito user';
  @Input() name: string = 'John DOE';
  @Input() skills: string[] = ['Skill 1', 'Skill 2'];

  constructor() { }

  ngOnInit(): void {
  }

}
