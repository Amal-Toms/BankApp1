import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytransactionComponent } from './mytransaction.component';

describe('MytransactionComponent', () => {
  let component: MytransactionComponent;
  let fixture: ComponentFixture<MytransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytransactionComponent]
    });
    fixture = TestBed.createComponent(MytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
