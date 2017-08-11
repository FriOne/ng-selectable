import { NgModule } from '@angular/core';

import { SimpleSelectComponent } from './standalone/simple-select.component';
import { SimpleSelectSearchComponent } from './search/simple-select-search.component';
import { SimpleSelectVirtualComponent } from './virtual/simple-select-virtual.component';
import { SimpleSelectSearchVirtualComponent } from './search-and-virtual/simple-select-search-virtual.component';

@NgModule({
  declarations: [
    SimpleSelectComponent,
    SimpleSelectSearchComponent,
    SimpleSelectVirtualComponent,
    SimpleSelectSearchVirtualComponent,
  ],
  exports: [
    SimpleSelectComponent,
    SimpleSelectSearchComponent,
    SimpleSelectVirtualComponent,
    SimpleSelectSearchVirtualComponent,
  ]
})
export class SimpleSelectModule {}
