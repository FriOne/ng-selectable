import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntitiesSelectVirtualComponent } from './entities-select-virtual.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<EntitiesSelectVirtualComponent>;
  let component: EntitiesSelectVirtualComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [EntitiesSelectVirtualComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EntitiesSelectVirtualComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });
});
