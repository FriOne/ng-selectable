import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntitiesSelectComponent } from './entities-select.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<EntitiesSelectComponent>;
  let component: EntitiesSelectComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [EntitiesSelectComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EntitiesSelectComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
