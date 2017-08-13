import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectSearchComponent } from './simple-select-search.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<SimpleSelectSearchComponent>;
  let component: SimpleSelectSearchComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [SimpleSelectSearchComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SimpleSelectSearchComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
