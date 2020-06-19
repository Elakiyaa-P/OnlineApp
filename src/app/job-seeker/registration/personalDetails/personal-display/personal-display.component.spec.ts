import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDisplayComponent } from './personal-display.component';

describe('PersonalDisplayComponent', () => {
  let component: PersonalDisplayComponent;
  let fixture: ComponentFixture<PersonalDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
