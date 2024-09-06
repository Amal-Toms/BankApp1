import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefdialogComponent } from './benefdialog.component';

describe('BenefdialogComponent', () => {
  let component: BenefdialogComponent;
  let fixture: ComponentFixture<BenefdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefdialogComponent]
    });
    fixture = TestBed.createComponent(BenefdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
