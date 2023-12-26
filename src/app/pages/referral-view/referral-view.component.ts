import { Component } from '@angular/core';
import {data} from './data.db'
@Component({
  selector: 'app-referral-view',
  templateUrl: './referral-view.component.html',
  styleUrls: ['./referral-view.component.scss']
})
export class ReferralViewComponent {
  referralRecord: any[] = []

  handleSearchEvent(event: any){
    this.referralRecord = data
  }
}
