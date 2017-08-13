import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectSearchVirtualComponent } from './simple-select-search-virtual.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<SimpleSelectSearchVirtualComponent>;
  let component: SimpleSelectSearchVirtualComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [SimpleSelectSearchVirtualComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SimpleSelectSearchVirtualComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
