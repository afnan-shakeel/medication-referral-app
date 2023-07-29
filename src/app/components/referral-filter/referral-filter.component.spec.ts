import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralFilterComponent } from './referral-filter.component';

describe('ReferralFilterComponent', () => {
  let component: ReferralFilterComponent;
  let fixture: ComponentFixture<ReferralFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralFilterComponent]
    });
    fixture = TestBed.createComponent(ReferralFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
