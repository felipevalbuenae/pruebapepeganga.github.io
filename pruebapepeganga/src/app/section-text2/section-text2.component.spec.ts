import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionText2Component } from './section-text2.component';

describe('SectionText2Component', () => {
  let component: SectionText2Component;
  let fixture: ComponentFixture<SectionText2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionText2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
