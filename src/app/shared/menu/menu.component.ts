import { Component, OnInit } from '@angular/core';

export interface Menu {
  slug: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  options: Menu[] = [
    {
      slug: '#',
      name: 'user_id',
    },
    {
      slug: '#',
      name: 'item_id',
    },
    {
      slug: '#',
      name: 'user_email',
    },
    {
      slug: '#',
      name: 'item_views',
    },
    {
      slug: '#',
      name: 'item_favorites',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  





}
