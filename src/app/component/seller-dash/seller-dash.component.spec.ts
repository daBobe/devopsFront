import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDashComponent } from './seller-dash.component';

describe('SellerDashComponent', () => {
  let component: SellerDashComponent;
  let fixture: ComponentFixture<SellerDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDashComponent]
    });
    fixture = TestBed.createComponent(SellerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
