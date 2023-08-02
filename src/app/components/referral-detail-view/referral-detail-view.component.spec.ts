import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralDetailViewComponent } from './referral-detail-view.component';

describe('ReferralDetailViewComponent', () => {
  let component: ReferralDetailViewComponent;
  let fixture: ComponentFixture<ReferralDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralDetailViewComponent]
    });
    fixture = TestBed.createComponent(ReferralDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
