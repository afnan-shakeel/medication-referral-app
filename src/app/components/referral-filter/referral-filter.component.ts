import { Component, EventEmitter, Output } from '@angular/core';
import { getAllEstablishments } from 'src/app/services/apis/referral';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const states = ['Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',]

@Component({
  selector: 'app-referral-filter',
  templateUrl: './referral-filter.component.html',
  styleUrls: ['./referral-filter.component.scss']
})
export class ReferralFilterComponent {
  data: any[] = [];
  establishments: any[] = [];
  public selectedRefFrom: any;
  public selectedRefTo: any;

  ngOnInit(): void {
    this.fetchEstablishments()
  }

  searchEstablishment: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : this.establishments.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  responseStatusValues = [
    { title: "PENDING", value: "P" }, { title: "APPROVED", value: "A" }, { title: "REJECTED", value: "R" }
  ]
  referralStatusValues = [
    { title: "ACTIVE", value: "A" }, { title: "CANCELLED", value: "C" }
  ]

  @Output() searchEvent = new EventEmitter

  fetchEstablishments() {
    const res = getAllEstablishments()
    console.log(res)
  }
  search() {
    this.data = [{ name: 'name', id: 1, email: 'asd@zxc' }]
    this.searchEvent.emit(this.data)
  }
  reset() {
    this.data = []
    this.searchEvent.emit(this.data)
  }
}
