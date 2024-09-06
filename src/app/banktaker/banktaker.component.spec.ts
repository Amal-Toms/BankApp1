import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanktakerComponent } from './banktaker.component';

describe('BanktakerComponent', () => {
  let component: BanktakerComponent;
  let fixture: ComponentFixture<BanktakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanktakerComponent]
    });
    fixture = TestBed.createComponent(BanktakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
