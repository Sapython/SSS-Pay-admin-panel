import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRetailerComponent } from './transfer-retailer.component';

describe('TransferRetailerComponent', () => {
  let component: TransferRetailerComponent;
  let fixture: ComponentFixture<TransferRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferRetailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
