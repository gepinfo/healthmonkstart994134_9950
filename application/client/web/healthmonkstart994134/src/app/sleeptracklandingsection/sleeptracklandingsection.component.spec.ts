import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleeptracklandingsectionComponent } from './sleeptracklandingsection.component';

describe('SleeptracklandingsectionComponent', () => {
  let component: SleeptracklandingsectionComponent;
  let fixture: ComponentFixture<SleeptracklandingsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleeptracklandingsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleeptracklandingsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});