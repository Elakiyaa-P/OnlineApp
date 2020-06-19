import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDisplayComponent } from './education-display.component';

describe('EducationDisplayComponent', () => {
  let component: EducationDisplayComponent;
  let fixture: ComponentFixture<EducationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
