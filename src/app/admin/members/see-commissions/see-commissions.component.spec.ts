import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCommissionsComponent } from './see-commissions.component';

describe('SeeCommissionsComponent', () => {
  let component: SeeCommissionsComponent;
  let fixture: ComponentFixture<SeeCommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCommissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
