import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBgScooter2Component } from './section-bg-scooter2.component';

describe('SectionBgScooter2Component', () => {
  let component: SectionBgScooter2Component;
  let fixture: ComponentFixture<SectionBgScooter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBgScooter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBgScooter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
