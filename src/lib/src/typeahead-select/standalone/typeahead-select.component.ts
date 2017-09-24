import {
  Component, ElementRef, forwardRef, HostBinding, HostListener, Input, Renderer2,
  SimpleChanges, ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const TYPEAHEAD_SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TypeaheadSelectComponent),
  multi: true,
};

@Component({
  selector: 'ng-typeahead-select',
  templateUrl: './typeahead-select.component.html',
  styleUrls: ['./typeahead-select.component.css'],
  providers: [TYPEAHEAD_SELECT_VALUE_ACCESSOR],
})
export class TypeaheadSelectComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() search: (term: string) => Observable<any>;
  @Input() searchDelay = 300;
  @Input() idProp: string;
  @Input() textProp = 'name';
  @Input() adapter = (entity: any) => (entity && entity[this.textProp]);
  @ViewChild('searchInputRef') searchInputRef: ElementRef;
  @HostBinding('attr.aria-disabled') @HostBinding('class.disabled') disabled = false;
  @HostBinding('class.dropdown') dropdownClass = true;
  @HostBinding('class.has-selected-value') hasSelectedValue = false;
  isOpened = false;
  adaptedItems$: Observable<any[]>;

  private searchInit$ = new Subject<string>();
  private searchType$: Observable<string>;
  private currentSearchString = '';
  private innerValue: any;
  private onChange = (_: any) => {};
  private onTouched = () => {};

  constructor(private renderer: Renderer2, private ref: ElementRef) {}

  ngAfterViewInit() {
    this.searchType$ = this.createObservableFromInputEvents();
    this.adaptedItems$ = Observable
      .merge(
        this.searchType$,
        this.searchInit$,
      )
      .switchMap(searchString => this
        .search(searchString)
        .map(items => this.adaptItems(items))
      );

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

    if (this.isOpened) {
      this.searchInit$.next('');
      setTimeout(() => this.focusSearchInput());
    }
  }

  protected adaptItems(items: any[]): any[] {
    return items.map(item => ({
      label: this.adapter(item),
      value: this.idProp ? item[this.idProp] : item,
    }));
  }

  private focusSearchInput() {
    this.searchInputRef.nativeElement.focus();
  }

  private createObservableFromInputEvents() {
    const searchInput = this.searchInputRef.nativeElement;
    return Observable
      .merge(
        Observable.fromEvent(searchInput, 'input'),
        Observable.fromEvent(searchInput, 'cut'),
        Observable.fromEvent(searchInput, 'copy'),
        Observable.fromEvent(searchInput, 'paste'),
        Observable.fromEvent(searchInput, 'keyup'),
      )
      .map(() => searchInput.value)
      .do(searchString => (this.currentSearchString = searchString))
      .debounceTime(1000)
      .distinctUntilChanged();
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
