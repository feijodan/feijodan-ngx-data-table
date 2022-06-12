import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// tslint:disable-next-line:no-duplicate-imports
import * as _moment from 'moment';
// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ColumnActionTypeBaseComponent } from '../column-action-type-base/column-action-type-base.component';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { IColumnFilterCriteria } from '../../../data-table-models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const moment = _rollupMoment || _moment;

const EMPTY_DATES = 'Datas em branco';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'fdn-column-action-type-date',
  templateUrl: './column-action-type-date.component.html',
  styleUrls: ['../../../action-common.scss'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
})
export class ColumnActionTypeDateComponent extends ColumnActionTypeBaseComponent implements OnInit, OnDestroy {
  @ViewChild('startDateInput') startDateInput!: ElementRef;
  @ViewChild('endDateInput') endDateInput!: ElementRef;

  @Input() startDateTranslatedText: string = 'Start Date';
  @Input() endDateTranslatedText: string = 'End Date';
  @Input() emptyDatesTranslatedText: string = 'Empty Dates';

  startDate: Date | null = null;
  endDate: Date | null = null;

  emptyDatesChecked = false;
  dateIntervalFilterDisabled = false;
  valuesToDisplay = '';

  private startDateStr = '';
  private endDateStr = '';
  private isFilterApplied = false;
  private componentDestroyed$ = new Subject<void>();

  ngOnInit() {
    if (this.activeFilters.some((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey)) {
      this.applyInitialActiveFilters(this.activeFilters
        .find((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey));
    }
    this.clearAll$.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => this.onClearAll());
  }

  onFilterMenuOpen(): void {
    if (!this.dateIntervalFilterDisabled && this.autoFilterFocus) {
      setTimeout(() => this.startDateInput.nativeElement.focus(), 200);
    }
  }

  onStartDateChange(matDatepickerInputEvent: MatDatepickerInputEvent<unknown>): void {
    this.startDateStr = (<Moment>matDatepickerInputEvent.value) ? (<Moment>matDatepickerInputEvent.value).valueOf().toString() : '';
    this.valuesToDisplay = this.getDateToDisplay();
    this.emitFilterEventForDateType();
  }

  onEndDateChange(matDatepickerInputEvent: MatDatepickerInputEvent<unknown>): void {
    this.endDateStr = (<Moment>matDatepickerInputEvent.value) ? (<Moment>matDatepickerInputEvent.value).valueOf().toString() : '';
    this.valuesToDisplay = this.getDateToDisplay();
    this.emitFilterEventForDateType();
  }

  clearStartDateInput(): void {
    this.clearStartDateValues();
    this.updateValuesToDisplayAndEmitFilterEventForDateType();
  }

  clearEndDateInput(): void {
    this.clearEndDateValues();
    this.updateValuesToDisplayAndEmitFilterEventForDateType();
  }

  onNullDatesChange(matCheckboxChange: MatCheckboxChange): void {
    this.startDateInput.nativeElement.value = '';
    this.startDateStr = '';
    this.endDateInput.nativeElement.value = '';
    this.endDateStr = '';
    if (matCheckboxChange.checked) {
      this.dateIntervalFilterDisabled = true;
      this.valuesToDisplay = EMPTY_DATES;
      this.emitFilterForNull();
    } else {
      this.dateIntervalFilterDisabled = false;
      this.valuesToDisplay = '';
      this.emitFilterForCleaning();
    }
  }

  private applyInitialActiveFilters(columnFilterCriteria: IColumnFilterCriteria | undefined) {
    if (columnFilterCriteria?.valueToFilterOn) {
      if (columnFilterCriteria?.valueToFilterOn[0] === 'null') {
        this.valuesToDisplay = EMPTY_DATES;
        this.emptyDatesChecked = true;
        this.dateIntervalFilterDisabled = true;
      } else {
        this.startDateStr = columnFilterCriteria.valueToFilterOn[0];
        if (this.startDateStr) {
          this.startDate = new Date(+this.startDateStr);
        }
        this.endDateStr = columnFilterCriteria.valueToFilterOn[1];
        if (this.endDateStr) {
          this.endDate = new Date(+this.endDateStr);
        }
        this.valuesToDisplay = this.getDateToDisplay();
      }
      this.isFilterApplied = true;
    }
  }

  private onClearAll(): void {
    if (this.isFilterApplied) {
      this.clearStartDateValues();
      this.clearEndDateValues();
      this.updateValuesToDisplayAndEmitFilterEventForDateType();
    }
  }

  private getDateToDisplay(): string {
    const startDateStr = this.convertMillisToStringDate(+this.startDateStr);
    const endDateStr = this.convertMillisToStringDate(+this.endDateStr);

    return !startDateStr && !endDateStr ? '' : `${startDateStr} .. ${endDateStr}`;
  }

  private updateValuesToDisplayAndEmitFilterEventForDateType(): void {
    this.valuesToDisplay = this.getDateToDisplay();
    this.emitFilterEventForDateType();
  }

  private emitFilterEventForDateType(): void {
    if (!this.startDateStr && !this.endDateStr) {
      this.emitFilterForCleaning();
      this.isFilterApplied = false;
    } else {
      this.filter.emit({
        columnKey: this.columnKey,
        valueToFilterOn: [this.startDateStr, this.endDateStr],
        filterType: this.filterType
      });
      this.isFilterApplied = true;
    }
  }

  private clearStartDateValues(): void {
    this.startDateInput.nativeElement.value = '';
    this.startDateStr = '';
    this.startDate = null;
  }

  private clearEndDateValues(): void {
    this.endDateInput.nativeElement.value = '';
    this.endDateStr = '';
    this.endDate = null;
  }

  private emitFilterForNull(): void {
    this.filter.emit({columnKey: this.columnKey, valueToFilterOn: ['null'], filterType: this.filterType});
  }

  private emitFilterForCleaning(): void {
    this.filter.emit({columnKey: this.columnKey, valueToFilterOn: [], filterType: this.filterType});
  }

  private convertMillisToStringDate(dateInMillis: number): string {
    const dateObject = dateInMillis ? new Date(dateInMillis) : null;
    return dateObject
      ? `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear().toString().substr(-2)}` : '';
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
