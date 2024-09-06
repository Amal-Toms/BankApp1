import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefeditComponent } from './benefedit.component';

describe('BenefeditComponent', () => {
  let component: BenefeditComponent;
  let fixture: ComponentFixture<BenefeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefeditComponent]
    });
    fixture = TestBed.createComponent(BenefeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
