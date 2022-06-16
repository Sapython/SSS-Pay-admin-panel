import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkSMSComponent } from './bulk-sms.component';

describe('BulkSMSComponent', () => {
  let component: BulkSMSComponent;
  let fixture: ComponentFixture<BulkSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkSMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
