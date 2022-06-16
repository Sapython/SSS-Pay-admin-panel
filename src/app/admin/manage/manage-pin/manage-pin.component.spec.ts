import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePinComponent } from './manage-pin.component';

describe('ManagePinComponent', () => {
  let component: ManagePinComponent;
  let fixture: ComponentFixture<ManagePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
