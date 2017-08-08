import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleSelectComponent } from './simple-select.component';

describe('SimpleSelectComponent', function () {
  let de: DebugElement;
  let comp: SimpleSelectComponent;
  let fixture: ComponentFixture<SimpleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleSelectComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSelectComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h2'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h2 = de.nativeElement;
    expect(h2.innerText).toMatch(/angular/i,
      '<h2> should say something about "Angular"');
  });
});
