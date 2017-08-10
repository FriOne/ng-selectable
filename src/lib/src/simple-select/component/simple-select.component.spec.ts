import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectComponent } from './simple-select.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<SimpleSelectComponent>;
  let component: SimpleSelectComponent;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [SimpleSelectComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSelectComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.opened).toBeFalsy('dropdown is opened by default');
  });

  // it('should be closed by default', () => {
  //   fixture.nativeElement.querySelector(`[ngbDropdown]`);
  // });
});
