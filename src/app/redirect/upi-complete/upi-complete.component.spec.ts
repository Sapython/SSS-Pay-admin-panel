import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiCompleteComponent } from './upi-complete.component';

describe('UpiCompleteComponent', () => {
  let component: UpiCompleteComponent;
  let fixture: ComponentFixture<UpiCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
