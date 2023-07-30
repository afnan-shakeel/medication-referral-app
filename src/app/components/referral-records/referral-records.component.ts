import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referral-records',
  templateUrl: './referral-records.component.html',
  styleUrls: ['./referral-records.component.scss']
})
export class ReferralRecordsComponent {
  @Input() referralRecord: any[] = []
  page = 1;
	pageSize = 4;
	collectionSize = 12;
	refreshCountries() {
    console.log('refersh table')
  }

}
