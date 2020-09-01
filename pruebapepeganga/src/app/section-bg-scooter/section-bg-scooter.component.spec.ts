import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBgScooterComponent } from './section-bg-scooter.component';

describe('SectionBgScooterComponent', () => {
  let component: SectionBgScooterComponent;
  let fixture: ComponentFixture<SectionBgScooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBgScooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBgScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
