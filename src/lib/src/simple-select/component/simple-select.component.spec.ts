import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectComponent } from './simple-select.component';

describe('SimpleSelectComponent', function () {
  let fixture: ComponentFixture<SimpleSelectComponent>;
  let component: SimpleSelectComponent;

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
      });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should be closed by default', () => {
    fixture.detectChanges();
    expect(component.isOpened).toBeFalsy('dropdown is opened by default');
  });

  it('should be opened on input click if has items', () => {
    component.items = ['A', 'B', 'C'];
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector(`input`);
    input.click();

    expect(component.isOpened).toBeTruthy('not opening when clicking on input when have items set');
  });
});
