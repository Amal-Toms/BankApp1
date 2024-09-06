import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcardComponent } from './bankcard.component';

describe('BankcardComponent', () => {
  let component: BankcardComponent;
  let fixture: ComponentFixture<BankcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankcardComponent]
    });
    fixture = TestBed.createComponent(BankcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
