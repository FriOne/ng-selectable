import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectComponent } from './simple-select.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<SimpleSelectComponent>;
  let component: SimpleSelectComponent;
  let selectedValueRef: DebugElement;
  let itemRefs: DebugElement[];

  beforeEach(async(() => {
    const moduleConfiguration = {
      declarations: [SimpleSelectComponent]
    };

    TestBed
      .configureTestingModule(moduleConfiguration)
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SimpleSelectComponent);
        component = fixture.componentInstance;
        selectedValueRef = fixture.debugElement.query(By.css('.selected-value'));
        itemRefs = fixture.debugElement.queryAll(By.css('.dropdown .item'));
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });

  it('should be opened or not on click depending on items set', () => {
    selectedValueRef.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('was opened with no items set');

    component.items = [];
    selectedValueRef.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('was opened with empty items array');

    component.items = ['A', 'B', 'C'];
    selectedValueRef.nativeElement.click();
    fixture.detectChanges();
    expect(component.isOpened).toBeTruthy(
      'not opening when clicking on selected value element when have items set'
    );
  });

  it('should contain items blocks as many as the items input array length', () => {
    fixture.detectChanges();
    expect(itemRefs.length).toBe(0, 'contains items by default');

    component.items = [];
    fixture.detectChanges();
    expect(itemRefs.length).toBe(0,'contains items with empty items array');

    component.items = ['A', 'B', 'C'];
    fixture.detectChanges();
    expect(itemRefs.length).toBe(3, 'contains wrong items count');
  });

  it('should show placeholder if necessary', () => {
    const placeholder = 'Enter something here';
    component.placeholder = placeholder;
    fixture.detectChanges();

    expect(selectedValueRef.nativeElement.innerText.trim()).toBe(
      placeholder,
      'placeholder was not set'
    );
  });
});
