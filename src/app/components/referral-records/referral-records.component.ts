import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-referral-records',
  templateUrl: './referral-records.component.html',
  styleUrls: ['./referral-records.component.scss']
})

export class ReferralRecordsComponent {
  


  _referralRecord: any[] = [];
  filterTableRecords: any[] = []
  page = 1;
  pageSize: number = 4;
  collectionSize = this._referralRecord.length;
  @Input()
  set referralRecord(value: any) {
    this._referralRecord = value
    this.collectionSize = this._referralRecord.length;
    this.refreshRows()
  }
  get referralRecord(): any {
    return this._referralRecord
  }



  refreshRows() {
    console.log('refersh table')
    this.pageSize = Number(this.pageSize)
    console.log(this.page, this.pageSize, this.collectionSize)
    this.filterTableRecords = this._referralRecord.map((row: any, i: number) => ({ id: i + 1, ...row })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }

}
