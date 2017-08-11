import { NgModule } from '@angular/core';

import { TypeaheadSelectComponent } from './standalone/typeahead-select.component';
import { TypeaheadSelectVirtualComponent } from './virtual/typeahead-select-virtual.component';

@NgModule({
  declarations: [
    TypeaheadSelectComponent,
    TypeaheadSelectVirtualComponent,
  ],
  exports: [
    TypeaheadSelectComponent,
    TypeaheadSelectVirtualComponent,
  ]
})
export class TypeaheadSelectModule {}
