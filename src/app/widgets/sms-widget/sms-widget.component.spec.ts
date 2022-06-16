import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsWidgetComponent } from './sms-widget.component';

describe('SmsWidgetComponent', () => {
  let component: SmsWidgetComponent;
  let fixture: ComponentFixture<SmsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
