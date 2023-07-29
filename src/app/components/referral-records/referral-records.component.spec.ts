import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralRecordsComponent } from './referral-records.component';

describe('ReferralRecordsComponent', () => {
  let component: ReferralRecordsComponent;
  let fixture: ComponentFixture<ReferralRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralRecordsComponent]
    });
    fixture = TestBed.createComponent(ReferralRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
