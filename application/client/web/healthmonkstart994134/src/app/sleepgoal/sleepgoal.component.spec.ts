import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepgoalComponent } from './sleepgoal.component';

describe('SleepgoalComponent', () => {
  let component: SleepgoalComponent;
  let fixture: ComponentFixture<SleepgoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepgoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});