import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const TYPEAHEAD_SELECT_VIRTUAL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TypeaheadSelectVirtualComponent),
  multi: true,
};

@Component({
  selector: 'ng-typeahead-select-virtual',
  templateUrl: './typeahead-select-virtual.component.html',
  styleUrls: ['./typeahead-select-virtual.component.css'],
  providers: [TYPEAHEAD_SELECT_VIRTUAL_VALUE_ACCESSOR],
})
export class TypeaheadSelectVirtualComponent implements ControlValueAccessor {
  /**
   * Array of strings or numbers that will be shown in a dropdown.
   */
  @Input() items: string[] | number[] = [];

  isOpened = false;

  private innerValue: any;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  onSelectedValueClick() {
    this.isOpened = true;
  }

  onSearchChange(search: string) {

  }

  onItemClick(item: string | number) {

  }

  // --------------------- NgModel --------------------- //
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
}
