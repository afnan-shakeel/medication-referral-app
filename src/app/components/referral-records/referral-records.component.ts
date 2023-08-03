import { Component, Input, ViewChild, Output } from '@angular/core';
import { AxiosService } from 'src/app/services/axios';

interface referralData {
  onlineId: number;
  fromEstName: string;
  toEstName: string;
  patientId: number;
  patientName: string;
  referralStatus: string;
  responseStatus: string;
}

@Component({
  selector: 'app-referral-records',
  templateUrl: './referral-records.component.html',
  styleUrls: ['./referral-records.component.scss']
})

export class ReferralRecordsComponent {
  constructor(private axiosService: AxiosService) {

  }

  openMedDtl: boolean = false
  currentPage = 0
  refDtlLoader = false

  @Output() referralDtl: any;
  @Output() selectedRef: any;

  @Input() referralRecord: any;

  // ngx-datatable
  @ViewChild('referralTable') table: any;
  columns = [{ prop: 'onlineId' }, { name: 'Patient Id' }, { name: 'Patient Name' }, { name: 'Reffered from ' }, { name: 'Referred To' }, { name: 'Referral status' }, { name: 'Response Status' }];

  onPageChange(event: any) {
    // to keep current page after routing to refMed Dtl table (view btn)
    this.currentPage = event.offset
  }

  toggleExpandRow(row: any) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event: any) {
    // console.log('Detail Toggled', event);
  }

  async toggleMedDtl(referralData: any) {
    this.refDtlLoader = true
    let onlineId = referralData.onlineId
    const res = await this.axiosService.get({ url: `/getMedRefDtlByOnlineId/${onlineId}` });
    console.log('getMedRefDtlByOnlineId res', res)
    this.referralDtl = res
    this.selectedRef = referralData
    this.openMedDtl = true
    this.refDtlLoader = false
  }
  handleToggleMedRef(value: boolean) {
    this.openMedDtl = value
  }


}
