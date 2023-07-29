import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() toggleEvent  = new EventEmitter()
  toggleMenu(){
    
    this.toggleEvent.emit()
    console.log('event to emit here')
  }
}
