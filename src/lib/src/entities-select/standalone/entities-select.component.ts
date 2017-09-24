import {
  AfterViewInit,
  Component, ElementRef, forwardRef, HostBinding, HostListener, Input, OnChanges, Renderer2,
  SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const ENTITIES_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EntitiesSelectComponent),
  multi: true,
};

@Component({
  selector: 'ng-entities-select',
  templateUrl: './entities-select.component.html',
  styleUrls: ['./entities-select.component.css'],
  providers: [ENTITIES_SELECT_VALUE_ACCESSOR],
})
export class EntitiesSelectComponent implements ControlValueAccessor, AfterViewInit, OnChanges {
  @Input() placeholder: string;
  @Input() items: any[] = [];
  @Input() idProp: string;
  @Input() textProp = 'name';
  @Input() adapter = (entity: any) => (entity && entity[this.textProp]);
  @HostBinding('attr.aria-disabled') @HostBinding('class.disabled') disabled = false;
  @HostBinding('class.dropdown') dropdownClass = true;
  @HostBinding('class.has-selected-value') hasSelectedValue = false;
  isOpened = false;
  adaptedItems: any[] = [];

  private innerValue: any;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private renderer: Renderer2, private ref: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items && this.items) {
      this.adaptedItems = this.adaptItems(this.items);
    }
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.ref.nativeElement, 'role', 'listbox');
    this.renderer.setAttribute(this.ref.nativeElement, 'tabindex', '0');
    if (this.placeholder) {
      this.renderer.setAttribute(this.ref.nativeElement, 'aria-label', this.placeholder);
    }
    this.renderer.setAttribute(this.ref.nativeElement, 'aria-multiselectable', 'false');
  }

  get selectedText() {
    return this.value ? this.adapter(this.value) : '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
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

  protected adaptItems(items: any[]): any[] {
    return items.map(item => ({
      label: this.adapter(item),
      value: this.idProp ? item[this.idProp] : item,
    }));
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
