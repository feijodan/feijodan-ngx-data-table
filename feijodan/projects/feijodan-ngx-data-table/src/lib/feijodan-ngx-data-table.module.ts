import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';
import { WarningWaitingServerResponseComponent } from './data-table/warning-waiting-server-response/warning-waiting-server-response.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DataTableComponent,
    WarningWaitingServerResponseComponent
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class FeijodanNgxDataTableModule { }
