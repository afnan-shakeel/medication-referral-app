import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-referral-filter',
  templateUrl: './referral-filter.component.html',
  styleUrls: ['./referral-filter.component.scss']
})
export class ReferralFilterComponent {
  data: any[]=[];
  @Output() searchEvent = new EventEmitter
  search(){
    this.data = [{name:'name',id:1, email:'asd@zxc'}]
    this.searchEvent.emit(this.data)
  }
}
