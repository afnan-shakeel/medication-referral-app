import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() isMenuOpen: boolean = false; 

  menu = [
    {
      title:'Dashboard',
      path: '/dashboard',
      icon: 'fa fa-gauge fa-lg'
    },
    {
      title:'Referral',
      path: '/referral',
      icon: 'fa fa-table fa-lg'
    }
  ]
  getMenuWidth(): string {
    return this.isMenuOpen ? '220px' : '50px';
  }

}
