import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybeneftransactionComponent } from './mybeneftransaction.component';

describe('MybeneftransactionComponent', () => {
  let component: MybeneftransactionComponent;
  let fixture: ComponentFixture<MybeneftransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MybeneftransactionComponent]
    });
    fixture = TestBed.createComponent(MybeneftransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
