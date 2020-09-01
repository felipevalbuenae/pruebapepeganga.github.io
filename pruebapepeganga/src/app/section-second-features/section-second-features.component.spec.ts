import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSecondFeaturesComponent } from './section-second-features.component';

describe('SectionSecondFeaturesComponent', () => {
  let component: SectionSecondFeaturesComponent;
  let fixture: ComponentFixture<SectionSecondFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSecondFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSecondFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
