import { NgModule } from '@angular/core';

import { EntitiesSelectComponent } from './standalone/entities-select.component';
import { EntitiesSelectSearchComponent } from './search/entities-select-search.component';
import { EntitiesSelectVirtualComponent } from './virtual/entities-select-virtual.component';
import { EntitiesSelectSearchVirtualComponent } from './search-and-virtual/entities-select-search-virtual.component';

@NgModule({
  declarations: [
    EntitiesSelectComponent,
    EntitiesSelectSearchComponent,
    EntitiesSelectVirtualComponent,
    EntitiesSelectSearchVirtualComponent,
  ],
  exports: [
    EntitiesSelectComponent,
    EntitiesSelectSearchComponent,
    EntitiesSelectVirtualComponent,
    EntitiesSelectSearchVirtualComponent,
  ]
})
export class EntitiesSelectModule {}
