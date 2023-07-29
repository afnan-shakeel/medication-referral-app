import { Component } from '@angular/core';

@Component({
  selector: 'app-referral-view',
  templateUrl: './referral-view.component.html',
  styleUrls: ['./referral-view.component.scss']
})
export class ReferralViewComponent {
  referralRecord = []

  handleSearchEvent(data: any){
    console.log('recieved to parent', data)
    this.referralRecord = data
  }
}
