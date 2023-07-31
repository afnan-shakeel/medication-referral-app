import { Component, Input, AfterContentInit } from '@angular/core';
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

  columns = [{ prop: 'onlineId' }, { name: 'Patient Id' }, { name: 'Patient Name' },{ name: 'Reffered from ' }, { name: 'Referred To' }, { name: 'Referral status' }, { name: 'Response Status' }];
  
  refreshRows() {
    this.pageSize = Number(this.pageSize)
    console.log(this.page, this.pageSize, this.collectionSize)
    this.filterTableRecords = this._referralRecord.map((row: any, i: number) => ({ id: i + 1, ...row })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }


}
