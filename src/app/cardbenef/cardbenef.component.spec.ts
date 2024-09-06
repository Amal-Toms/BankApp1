import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbenefComponent } from './cardbenef.component';

describe('CardbenefComponent', () => {
  let component: CardbenefComponent;
  let fixture: ComponentFixture<CardbenefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardbenefComponent]
    });
    fixture = TestBed.createComponent(CardbenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
