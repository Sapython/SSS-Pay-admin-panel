import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketWidgetComponent } from './ticket-widget.component';

describe('TicketWidgetComponent', () => {
  let component: TicketWidgetComponent;
  let fixture: ComponentFixture<TicketWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
