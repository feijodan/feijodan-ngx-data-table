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
import { DataTableContentEditComponent } from './data-table-content/data-table-content-edit/data-table-content-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataTableContentTextComponent } from './data-table-content/data-table-content-text/data-table-content-text.component';
import { DataTableContentViewComponent } from './data-table-content/data-table-content-view/data-table-content-view.component';
import { TableActionComponent } from './table-action/table-action.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

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
    DataTableContentEditComponent,
    DataTableContentTextComponent,
    DataTableContentViewComponent,
    TableActionComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule {
}
