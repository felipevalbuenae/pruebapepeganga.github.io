import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImages2Component } from './section-images2.component';

describe('SectionImages2Component', () => {
  let component: SectionImages2Component;
  let fixture: ComponentFixture<SectionImages2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionImages2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
