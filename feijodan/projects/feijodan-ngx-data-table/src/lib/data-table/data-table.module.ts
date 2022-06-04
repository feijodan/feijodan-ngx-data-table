import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import {
  WarningWaitingServerResponseComponent
} from './warning-waiting-server-response/warning-waiting-server-response.component';
import { MatIconModule } from '@angular/material/icon';
import { DataTableContentComponent } from './data-table-content/data-table-content.component';
import { DataTableContentBooleanComponent } from './data-table-content/data-table-content-boolean/data-table-content-boolean.component';
import { BooleanClassPipe } from './data-table-content/data-table-content-boolean/pipe/boolean-class.pipe';
import { BooleanIconPipe } from './data-table-content/data-table-content-boolean/pipe/boolean-icon.pipe';
import { DataTableContentCurrencyComponent } from './data-table-content/data-table-content-currency/data-table-content-currency.component';
import {
  EmptyCurrencyPipe
} from './data-table-content/data-table-content-currency/pipe/empty-currency.pipe';
import { CommonModule } from '@angular/common';
import { DataTableContentDateComponent } from './data-table-content/data-table-content-date/data-table-content-date.component';
import { EmptyDatePipe } from './data-table-content/data-table-content-date/pipe/empty-date.pipe';

const pipes = [
  EmptyDatePipe,
  BooleanClassPipe,
  BooleanIconPipe,
  EmptyCurrencyPipe
];
@NgModule({
  declarations: [
    [...pipes],
    DataTableComponent,
    WarningWaitingServerResponseComponent,
    DataTableContentComponent,
    DataTableContentBooleanComponent,
    DataTableContentCurrencyComponent,
    DataTableContentDateComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule {
}
