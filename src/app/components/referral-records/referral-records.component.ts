import { Component, Input, AfterContentInit,ViewChild, EventEmitter, Output } from '@angular/core';
// import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef, GridReadyEvent, GridApi, ColumnApi,IDetailCellRendererParams } from 'ag-grid-community';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(config: NgbModalConfig, private modalService: NgbModal, private axiosService: AxiosService){

  }


  _referralRecord: any[] = [];
  filterTableRecords: any[] = []
  page = 1;
  pageSize: number = 4;
  collectionSize = this._referralRecord.length;
  openMedDtl: boolean = false
  currentPage = 0
  @Output() referralDtl: any;



  @Input()
  set referralRecord(value: any) {
    this._referralRecord = value
    this.collectionSize = this._referralRecord.length;
    // this.refreshRows()
  }
  get referralRecord(): any {
    return this._referralRecord
  }

  // ngx-datatable
  @ViewChild('referralTable') table: any;
  rows = [
    {"onlineId":"1001", "patientName":"Khalid Ansari xxxxxxxxxxxxxxxxxxxxxx","patientId":"2000000001", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1002", "patientName":"Khalid Ansari","patientId":"202", "fromEstName":"Khoula HOspital HOspital HOspital","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1003", "patientName":"Khalid Ansari","patientId":"203", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
    {"onlineId":"1004", "patientName":"Khalid Ansari","patientId":"204", "fromEstName":"Khoula","toEstName":"Nadha","respStatus":"Pending", "refStatus":"Acitve"},
  ]
  columns = [{ prop: 'onlineId' }, { name: 'Patient Id' }, { name: 'Patient Name' },{ name: 'Reffered from ' }, { name: 'Referred To' }, { name: 'Referral status' }, { name: 'Response Status' }];
  onPageChange(event: any){
    this.currentPage = event.offset
    console.log('this.currentPage',this.currentPage)
  }
  toggleExpandRow(row:any) {
    // console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event:any) {
    // console.log('Detail Toggled', event);
  }

  async toggleMedDtl(referralData: any){
    console.log('toggleMedDtl')
    let onlineId = referralData.onlineId
    console.log('onlineId',onlineId)
    const res = await this.axiosService.get({url:`/getMedRefDtlByOnlineId/${onlineId}`})
    console.log('getMedRefDtlByOnlineId res', res)
    this.referralDtl = res
    this.openMedDtl = true
  }
  handleToggleMedRef(value: boolean){
    this.openMedDtl = value
  }

  
  async openViewModal(referralData: any){
    let onlineId = referralData.onlineId
    console.log('onlineId',onlineId)
    const res = await this.axiosService.get({url:`/getMedRefDtlByOnlineId/${onlineId}`})
    console.log('getMedRefDtlByOnlineId res', res)
    // const viewModalRef = this.modalService.open(ReferralDetailViewComponent,{ centered: true, size: 'xl' });
    // viewModalRef.componentInstance.referralDtl = res
  }

}
