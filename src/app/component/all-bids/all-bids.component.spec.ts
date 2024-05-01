import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBidsComponent } from './all-bids.component';

describe('AllBidsComponent', () => {
  let component: AllBidsComponent;
  let fixture: ComponentFixture<AllBidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBidsComponent]
    });
    fixture = TestBed.createComponent(AllBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
