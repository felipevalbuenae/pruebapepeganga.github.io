import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarrusellComponent } from './section-carrusell.component';

describe('SectionCarrusellComponent', () => {
  let component: SectionCarrusellComponent;
  let fixture: ComponentFixture<SectionCarrusellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCarrusellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarrusellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
