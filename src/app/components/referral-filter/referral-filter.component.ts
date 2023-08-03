import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AxiosService } from 'src/app/services/axios';

@Component({
  selector: 'app-referral-filter',
  templateUrl: './referral-filter.component.html',
  styleUrls: ['./referral-filter.component.scss']
})
export class ReferralFilterComponent {
  constructor(private axiosService: AxiosService) { }
  data: any = [];
  establishments: any = [];
  searchForm: any = new FormGroup({
    fromEst: new FormControl(),
    toEst: new FormControl(),
    patientId: new FormControl(),
    respStatus: new FormControl(),
    refStatus: new FormControl(),
  })
  responseStatusValues = [
    { title: "PENDING", value: "Pending" }, { title: "APPROVED", value: "Approved" }, { title: "REJECTED", value: "Rejected" }
  ]
  referralStatusValues = [
    { title: "ACTIVE", value: "Active" }, { title: "CANCELLED", value: "Cancelled" }
  ]

  ngOnInit(): void {
    this.fetchEstablishments()
  }

  searchEstablishment: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        this.establishments.filter((v: any) => v.estName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );
  formatter = (x: { estName: string }) => x.estName;

  @Output() searchEvent = new EventEmitter

  async fetchEstablishments() {
    const res = await this.axiosService.get({ url: '/getAllEstablishments' })
    this.establishments = res
    console.log('fetched est')
  }
  loading = false
  async search() {
    this.loading = true
    const payload: any = {
      "fromEstId": this.searchForm.value.fromEst?.estCode || null,
      "patientId": this.searchForm.value.patientId || null,
      "refStatus": this.searchForm.value.refStatus || null,
      "respStatus": this.searchForm.value.respStatus || null,
      "toEstId": this.searchForm.value.toEst?.estCode || null
    }
    console.log('getAllMedRefWithParams payload', payload)
    
    const res = await this.axiosService.post({ url: '/getAllMedRefWithParams', data: payload })
    console.log('getAllMedRefWithParams res', res)
    this.data = res
    this.searchEvent.emit(this.data)
    this.loading = false
  }
  reset() {
    this.searchForm.reset()
    this.data = []
    this.searchEvent.emit(this.data)
  }
}
