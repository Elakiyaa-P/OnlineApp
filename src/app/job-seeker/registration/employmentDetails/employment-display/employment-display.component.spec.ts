import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentDisplayComponent } from './employment-display.component';

describe('EmploymentDisplayComponent', () => {
  let component: EmploymentDisplayComponent;
  let fixture: ComponentFixture<EmploymentDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
