import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntitiesSelectSearchVirtualComponent } from './entities-select-search-virtual.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<EntitiesSelectSearchVirtualComponent>;
  let component: EntitiesSelectSearchVirtualComponent;

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [EntitiesSelectSearchVirtualComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EntitiesSelectSearchVirtualComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });

  it('should be opened or not on click depending on items set', () => {
    const selectedValueElement = fixture.nativeElement.querySelector(`input`);

    selectedValueElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('was opened with no items set');

    component.items = [];
    selectedValueElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('was opened with empty items array');

    component.items = ['A', 'B', 'C'];
    selectedValueElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeTruthy(
      'not opening when clicking on selected value element when have items set'
    );
  });
});
