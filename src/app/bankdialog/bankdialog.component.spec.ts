import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdialogComponent } from './bankdialog.component';

describe('BankdialogComponent', () => {
  let component: BankdialogComponent;
  let fixture: ComponentFixture<BankdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankdialogComponent]
    });
    fixture = TestBed.createComponent(BankdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
