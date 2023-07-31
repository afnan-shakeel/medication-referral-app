import { Component, Input, AfterContentInit,ViewChild } from '@angular/core';
// import { Observable } from 'rxjs';
import { CellClickedEvent, ColDef, GridReadyEvent, GridApi, ColumnApi,IDetailCellRendererParams } from 'ag-grid-community';

interface referralData {
  onlineId: number;
  fromEstName: string;
  toEstName: string;
  patientId: number;
  patientName: string;
  referralStatus: string;
  responseStatus: string;
}
interface referralDetail {
  responseStatus: string;
}
@Component({
  selector: 'app-referral-records',
  templateUrl: './referral-records.component.html',
  styleUrls: ['./referral-records.component.scss']
})

export class ReferralRecordsComponent {
  private gridApi!: GridApi<referralData>;
  private gridColumnApi!: ColumnApi;



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
  // ag grid 
  public columnDefs: ColDef[] = [
    { headerName: 'Online ID', field: 'onlineId', cellRenderer: 'agGroupCellRenderer', maxWidth: 150 },
    { headerName: 'Patient Id', field: 'patientId', maxWidth: 150 },
    { headerName: 'Patient Name', field: 'patientName', minWidth: 200 },
    { headerName: 'Referral From', field: 'fromEstName', minWidth: 200 },
    { headerName: 'Referral To', field: 'toEstName', minWidth: 200 },
    { headerName: 'Referral Status', field: 'referralStatus', maxWidth: 150 },
    { headerName: 'Response Status', field: 'responseStatus', maxWidth: 150 },

  ];
  public defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true

  };
  xpageSize: number = 8;

  autoSizeAll(skipHeader: boolean) {
    const allColumnIds: string[] = [];
    this.gridColumnApi.getColumns()!.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }
  sizeToFit(params: any) {
    params.api.sizeColumnsToFit();
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

  toggleExpandRow(row:any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event:any) {
    console.log('Detail Toggled', event);
  }
  // ng table pagination
  refreshRows() {
    this.pageSize = Number(this.pageSize)
    console.log(this.page, this.pageSize, this.collectionSize)
    this.filterTableRecords = this._referralRecord.map((row: any, i: number) => ({ id: i + 1, ...row })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }


}
