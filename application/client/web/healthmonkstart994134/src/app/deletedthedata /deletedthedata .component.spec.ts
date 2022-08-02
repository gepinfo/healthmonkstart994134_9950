import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletedthedata Component } from './deletedthedata .component';

describe('Deletedthedata Component', () => {
  let component: Deletedthedata Component;
  let fixture: ComponentFixture<Deletedthedata Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deletedthedata Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deletedthedata Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});