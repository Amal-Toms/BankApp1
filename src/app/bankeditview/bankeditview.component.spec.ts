import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeditviewComponent } from './bankeditview.component';

describe('BankeditviewComponent', () => {
  let component: BankeditviewComponent;
  let fixture: ComponentFixture<BankeditviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankeditviewComponent]
    });
    fixture = TestBed.createComponent(BankeditviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
