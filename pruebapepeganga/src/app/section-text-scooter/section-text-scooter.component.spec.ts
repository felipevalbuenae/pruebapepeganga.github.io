import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTextScooterComponent } from './section-text-scooter.component';

describe('SectionTextScooterComponent', () => {
  let component: SectionTextScooterComponent;
  let fixture: ComponentFixture<SectionTextScooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTextScooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTextScooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
