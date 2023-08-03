import { Component, EventEmitter, Input,Output,ViewChild } from '@angular/core';
@Component({
  selector: 'app-referral-detail-view',
  templateUrl: './referral-detail-view.component.html',
  styleUrls: ['./referral-detail-view.component.scss']
})
export class ReferralDetailViewComponent {
  constructor(){

  }
  @Input() referralDtl: any;
  @Input() selectedRef: any;
  @ViewChild('referralDtlTable') table: any;

  columns = [{ prop: 'prescriptionId' }, { name: 'prescriptionId' }, { name: 'itemName' },{ name: 'strength ' }, { name: 'strengthDesc' },
   { name: 'courseName' }, { name: 'days' },{ name: 'presQty' },
   { name: 'refQty' }, { name: 'issuedQty' },{ name: 'issuedDate' },
  ];

  toggleExpandRow(row:any) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event:any) {
    // console.log('Detail Toggled', event);
  }

  @Output() toggleMedRefEvent = new EventEmitter()
  backToMedRef(){
    this.toggleMedRefEvent.emit(false)
  }
}
