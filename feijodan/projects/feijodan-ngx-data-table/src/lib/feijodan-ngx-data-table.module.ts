import { NgModule } from '@angular/core';
import { FeijodanNgxDataTableComponent } from './feijodan-ngx-data-table.component';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    FeijodanNgxDataTableComponent,
    DataTableComponent
  ],
  imports: [
  ],
  exports: [
    FeijodanNgxDataTableComponent
  ]
})
export class FeijodanNgxDataTableModule { }
