import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-bootstrap-app';
  
  toggleMenu = false
  handleToggleEvent(data: any){
    console.log('event to parent here')
    this.toggleMenu = !this.toggleMenu
  }
}
