import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralViewComponent } from './referral-view.component';

describe('ReferralViewComponent', () => {
  let component: ReferralViewComponent;
  let fixture: ComponentFixture<ReferralViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferralViewComponent]
    });
    fixture = TestBed.createComponent(ReferralViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
