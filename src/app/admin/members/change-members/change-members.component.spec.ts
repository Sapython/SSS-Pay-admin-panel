import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMembersComponent } from './change-members.component';

describe('ChangeMembersComponent', () => {
  let component: ChangeMembersComponent;
  let fixture: ComponentFixture<ChangeMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
