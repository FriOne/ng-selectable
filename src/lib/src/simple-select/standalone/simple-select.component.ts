import {
  AfterViewInit, Component, ElementRef, forwardRef, HostBinding, HostListener, Input,
  Renderer2
} from '@angular/core';
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
export class SimpleSelectComponent implements ControlValueAccessor, AfterViewInit {
  @Input() placeholder: string;
  @Input() items: string[] | number[] = [];
  @HostBinding('attr.aria-disabled') @HostBinding('class.disabled') disabled = false;
  @HostBinding('class.dropdown') dropdownClass = true;
  @HostBinding('class.has-selected-value') hasSelectedValue = false;
  isOpened = false;

  private innerValue: any;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private renderer: Renderer2, private ref: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.setAttribute(this.ref.nativeElement, 'role', 'listbox');
    this.renderer.setAttribute(this.ref.nativeElement, 'tabindex', '0');
    if (this.placeholder) {
      this.renderer.setAttribute(this.ref.nativeElement, 'aria-label', this.placeholder);
    }
    this.renderer.setAttribute(this.ref.nativeElement, 'aria-multiselectable', 'false');
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    const ref = this.ref.nativeElement;
    const clickedRef = event.target;

    if (clickedRef !== ref && !ref.contains(clickedRef)) {
      this.close();
    }
  }

  close() {
    this.isOpened = false;
  }

  onSelectedValueClick() {
    if (this.disabled) {
      return;
    }
    this.isOpened = !this.isOpened;
  }

  onItemClick(item: string | number) {
    this.value = item;
    this.isOpened = false;
  }

  // --------------------- NgModel --------------------- //
  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (this.innerValue !== value) {
      this.hasSelectedValue = !!value;
      this.innerValue = value;
      this.onChange(value);
    }
  }

  writeValue(value: any) {
    if (this.innerValue !== value) {
      this.hasSelectedValue = !!value;
      this.innerValue = value;
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.isOpened = false;
  }
}
