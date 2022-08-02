import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popupscreendate Component } from './popupscreendate .component';

describe('Popupscreendate Component', () => {
  let component: Popupscreendate Component;
  let fixture: ComponentFixture<Popupscreendate Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popupscreendate Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popupscreendate Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});