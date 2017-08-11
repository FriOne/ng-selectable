import { NgModule } from '@angular/core';
import { EntitiesSelectModule } from './entities-select/module';
import { SimpleSelectModule } from './simple-select/module';
import { TypeaheadSelectModule } from './typeahead-select/module';

@NgModule({
  declarations: [],
  exports: [
    EntitiesSelectModule,
    SimpleSelectModule,
    TypeaheadSelectModule,
  ]
})
export class SelectModule {}
