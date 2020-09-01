import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionReddotComponent } from './section-reddot.component';

describe('SectionReddotComponent', () => {
  let component: SectionReddotComponent;
  let fixture: ComponentFixture<SectionReddotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionReddotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionReddotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
