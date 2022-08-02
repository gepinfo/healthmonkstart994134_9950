import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupscreentimeComponent } from './popupscreentime.component';

describe('PopupscreentimeComponent', () => {
  let component: PopupscreentimeComponent;
  let fixture: ComponentFixture<PopupscreentimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupscreentimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupscreentimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});