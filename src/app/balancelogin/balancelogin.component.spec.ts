import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceloginComponent } from './balancelogin.component';

describe('BalanceloginComponent', () => {
  let component: BalanceloginComponent;
  let fixture: ComponentFixture<BalanceloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceloginComponent]
    });
    fixture = TestBed.createComponent(BalanceloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
