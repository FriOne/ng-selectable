import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadSelectComponent } from './standalone/typeahead-select.component';
import { TypeaheadSelectVirtualComponent } from './virtual/typeahead-select-virtual.component';

@NgModule({
  declarations: [
    CommonModule,
    TypeaheadSelectComponent,
    TypeaheadSelectVirtualComponent,
  ],
  exports: [
    TypeaheadSelectComponent,
    TypeaheadSelectVirtualComponent,
  ]
})
export class TypeaheadSelectModule {}
