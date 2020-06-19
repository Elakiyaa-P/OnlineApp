import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherPersonalComponent } from './fresher-personal.component';

describe('FresherPersonalComponent', () => {
  let component: FresherPersonalComponent;
  let fixture: ComponentFixture<FresherPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FresherPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FresherPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
