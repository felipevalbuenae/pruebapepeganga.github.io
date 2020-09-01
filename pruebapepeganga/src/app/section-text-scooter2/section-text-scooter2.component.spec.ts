import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTextScooter2Component } from './section-text-scooter2.component';

describe('SectionTextScooter2Component', () => {
  let component: SectionTextScooter2Component;
  let fixture: ComponentFixture<SectionTextScooter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTextScooter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTextScooter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
