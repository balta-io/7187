import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInputRadioSlideComponent } from './check-input-radio-slide.component';

describe('CheckInputRadioSlideComponent', () => {
  let component: CheckInputRadioSlideComponent;
  let fixture: ComponentFixture<CheckInputRadioSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInputRadioSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInputRadioSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
