import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TypeaheadSelectVirtualComponent } from './typeahead-select-virtual.component';

describe('TypeheadSelectVirtualComponent', function () {
  let fixture: ComponentFixture<TypeaheadSelectVirtualComponent>;
  let component: TypeaheadSelectVirtualComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [TypeaheadSelectVirtualComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TypeaheadSelectVirtualComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
