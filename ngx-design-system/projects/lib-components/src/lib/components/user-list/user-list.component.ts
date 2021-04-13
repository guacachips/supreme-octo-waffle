import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserListComponent implements OnInit {

  @Input() users: any[] = [
    {
      picture: 'https://bit.ly/3cYrq6a',
      name: 'Brendan EICH',
      description: 'Créateur de JavaScript',
      skills: [
        'Compétence 1',
        'Compétence 2',
      ]
    },
    {
      picture: 'https://bit.ly/3mvgzDM',
      name: 'Yan ZHU',
      description: 'Brave’s Chief Information Security Officer',
      skills: [
        'Compétence 1',
        'Compétence 2',
      ]
    },
    {
      picture: 'https://bit.ly/3muYWEl',
      name: 'Linus TORVALDS',
      lastname: 'TORVALDS',
      description: 'Créateur de Linux et GIT',
      skills: [
        'Compétence 1',
        'Compétence 2',
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
