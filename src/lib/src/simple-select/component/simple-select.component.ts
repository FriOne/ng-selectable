import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const SIMPLE_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleSelectComponent),
  multi: true,
};

@Component({
  selector: 'ng-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.css'],
  providers: [SIMPLE_SELECT_VALUE_ACCESSOR],
})
export class SimpleSelectComponent implements ControlValueAccessor {
  /**
   * Array of entities or strings will be shown in a dropdown.
   */
  @Input() items: any[];
  /**
   * Adapts incoming items for display.
   */
  @Input() adapter: (item: any) => any;
  /**
   * Field in the items that will be used for *ngFor,
   * Also will be used as control model in case modelAsId equal to true.
   * @type {string}
   */
  @Input() idField = 'id';
  /**
   * Field in the items that will be displayed in a dropdown and in an input.
   * @type {string}
   */
  @Input() textField = 'text';
  /**
   * If set to true, control model value will be set to item id field.
   * @type {boolean}
   */
  @Input() modelAsId = false;

  isOpened = false;

  private innerValue: any;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.onChange(value);
    }
  }

  writeValue(value: any) {
    if (this.innerValue !== value) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onInputClick() {
    this.isOpened = true;
  }
}
