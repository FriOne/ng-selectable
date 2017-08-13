import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypeaheadSelectComponent } from './typeahead-select.component';

describe('TypeaheadSelectComponent', function () {
  let fixture: ComponentFixture<TypeaheadSelectComponent>;
  let component: TypeaheadSelectComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [TypeaheadSelectComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TypeaheadSelectComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
