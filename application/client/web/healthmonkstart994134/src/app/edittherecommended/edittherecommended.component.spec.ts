import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittherecommendedComponent } from './edittherecommended.component';

describe('EdittherecommendedComponent', () => {
  let component: EdittherecommendedComponent;
  let fixture: ComponentFixture<EdittherecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittherecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittherecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});