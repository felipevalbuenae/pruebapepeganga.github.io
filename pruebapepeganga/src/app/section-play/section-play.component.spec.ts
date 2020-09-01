import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlayComponent } from './section-play.component';

describe('SectionPlayComponent', () => {
  let component: SectionPlayComponent;
  let fixture: ComponentFixture<SectionPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
