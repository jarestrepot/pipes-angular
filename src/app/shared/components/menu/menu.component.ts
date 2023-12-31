import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Angular pipe',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Date',
            icon: 'pi pi-align-left',
            routerLink: '/',
            routerLinkActiveOptions: 'option-choose'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
            routerLinkActiveOptions: 'option-choose'
          },
          {
            label: 'Not Commons',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
            routerLinkActiveOptions: 'option-choose'
          },
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Other element',
            icon: 'pi pi-ellipsis-v',
          }
        ]
      }
    ];
  }
}
