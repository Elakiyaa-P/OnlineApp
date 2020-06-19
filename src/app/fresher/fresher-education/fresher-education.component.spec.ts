import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherEducationComponent } from './fresher-education.component';

describe('FresherEducationComponent', () => {
  let component: FresherEducationComponent;
  let fixture: ComponentFixture<FresherEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FresherEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FresherEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
