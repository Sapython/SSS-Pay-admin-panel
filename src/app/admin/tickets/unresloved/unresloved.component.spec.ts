import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreslovedComponent } from './unresloved.component';

describe('UnreslovedComponent', () => {
  let component: UnreslovedComponent;
  let fixture: ComponentFixture<UnreslovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreslovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreslovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
