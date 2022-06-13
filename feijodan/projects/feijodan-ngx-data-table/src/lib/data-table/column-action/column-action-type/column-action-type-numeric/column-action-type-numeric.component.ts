import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ColumnActionTypeBaseComponent } from '../column-action-type-base/column-action-type-base.component';
import { IColumnFilterCriteria } from '../../../data-table-models';
import { EMPTY_NUMERIC_VALUES } from '../../../data-table-constants';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataTableUtils } from '../../../data-table-utils';

@Component({
  selector: 'fdn-column-action-type-numeric',
  templateUrl: './column-action-type-numeric.component.html',
  styleUrls: ['../../../action-common.scss']
})
export class ColumnActionTypeNumericComponent extends ColumnActionTypeBaseComponent implements OnInit, OnDestroy {
  @ViewChild('minimumNumericInput') minimumNumericInput!: ElementRef;
  @ViewChild('maximumNumericInput') maximumNumericInput!: ElementRef;

  @Input() minimumValueTranslatedText: string = 'Minimum value';
  @Input() maximumValueTranslatedText: string = 'Maximum value';
  @Input() onlyNumbersNoDotsOrCommasTranslatedText: string = 'Only numbers. No dots or commas.';
  @Input() emptyValuesTranslatedText: string = 'Empty values';

  minimumNumericValue = '';
  maximumNumericValue = '';
  numericIntervalButtonDisabled = false;
  isMinimumNumericValueValid = true;
  isMaximumNumericValueValid = true;

  minimumNumeric!: string;
  maximumNumeric!: string;
  emptyNumericValuesChecked = false;
  valuesToDisplay = '';

  private isFilterApplied = false;
  private componentDestroyed$: Subject<void> = new Subject<void>();


  constructor() {
    super();
  }

  ngOnInit() {
    if (this.activeFilters.some((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey)) {
      this.applyInitialActiveFilters(this.activeFilters
        .find((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey));
    }
    this.clearAll$.pipe(takeUntil(this.componentDestroyed$)).subscribe(value => this.onClearAll());
  }

  private applyInitialActiveFilters(columnFilterCriteria: IColumnFilterCriteria | undefined) {
    if (columnFilterCriteria && columnFilterCriteria.valueToFilterOn) {
      if (columnFilterCriteria.valueToFilterOn[0] === '0' && columnFilterCriteria.valueToFilterOn[1] === '0') {
        this.valuesToDisplay = EMPTY_NUMERIC_VALUES;
        this.emptyNumericValuesChecked = true;
        this.numericIntervalButtonDisabled = true;
      } else {
        this.minimumNumericValue = columnFilterCriteria.valueToFilterOn[0];
        if (this.minimumNumericValue) {
          this.minimumNumeric = this.minimumNumericValue;
        }
        this.maximumNumericValue = columnFilterCriteria.valueToFilterOn[1];
        if (this.maximumNumericValue) {
          this.maximumNumeric = this.maximumNumericValue;
        }
        this.valuesToDisplay = this.getNumericToDisplay();
      }
      this.isFilterApplied = true;
    }
  }

  onFilterMenuOpen(): void {
    if (!this.numericIntervalButtonDisabled && this.autoFilterFocus) {
      setTimeout(() => this.minimumNumericInput.nativeElement.focus(), 200);
    }
  }

  onMinimumValueChange(event: Event): void {
    const newMinimumvalue = (event.target as HTMLInputElement).value;
    if (DataTableUtils.isOnlyNumeric(newMinimumvalue)) {
      this.minimumNumericValue = newMinimumvalue ? newMinimumvalue : '';
      this.valuesToDisplay = this.getNumericToDisplay();
      this.emitFilterEventForNumericType();
      this.isMinimumNumericValueValid = true;
    } else {
      this.isMinimumNumericValueValid = false;
    }
  }

  onMaximumValueChange(event: Event): void {
    const newMaximumValue = (event.target as HTMLInputElement).value;
    if (DataTableUtils.isOnlyNumeric(newMaximumValue)) {
      this.maximumNumericValue = newMaximumValue ? newMaximumValue : '';
      this.valuesToDisplay = this.getNumericToDisplay();
      this.emitFilterEventForNumericType();
      this.isMaximumNumericValueValid = true;
    } else {
      this.isMaximumNumericValueValid = false;
    }
  }

  clearMinimumNumericInput(): void {
    this.clearMinimumNumericValues();
    this.updateValuesToDisplayAndEmitFilterEventForNumericType();
  }

  clearMaximumNumericInput(): void {
    this.clearMaximumNumericValues();
    this.updateValuesToDisplayAndEmitFilterEventForNumericType();
  }

  onNullNumericChange(matCheckboxChange: MatCheckboxChange): void {
    this.minimumNumericInput.nativeElement.value = '';
    this.minimumNumericValue = '';
    this.maximumNumericInput.nativeElement.value = '';
    this.maximumNumericValue = '';
    if (matCheckboxChange.checked) {
      this.numericIntervalButtonDisabled = true;
      this.valuesToDisplay = EMPTY_NUMERIC_VALUES;
      this.emitFilterForZero();
    } else {
      this.numericIntervalButtonDisabled = false;
      this.valuesToDisplay = '';
      this.emitFilterForCleaning();
    }
  }

  private onClearAll(): void {
    if (this.isFilterApplied) {
      this.clearMinimumNumericValues();
      this.clearMaximumNumericValues();
      this.updateValuesToDisplayAndEmitFilterEventForNumericType();
    }
  }

  private getNumericToDisplay(): string {
    const minimumValue = this.minimumNumericValue ? this.minimumNumericValue : '';
    const maximumValue = this.maximumNumericValue ? this.maximumNumericValue : '';

    return !minimumValue && !maximumValue ? '' : `${minimumValue} .. ${maximumValue}`;
  }

  private updateValuesToDisplayAndEmitFilterEventForNumericType(): void {
    this.valuesToDisplay = this.getNumericToDisplay();
    this.emitFilterEventForNumericType();
  }

  private emitFilterEventForNumericType(): void {
    if (!this.minimumNumericValue && !this.maximumNumericValue) {
      this.emitFilterForCleaning();
      this.isFilterApplied = false;
    } else {
      this.filter.emit({
        columnKey: this.columnKey, valueToFilterOn: [this.minimumNumericValue, this.maximumNumericValue],
        filterType: this.filterType
      });
      this.isFilterApplied = true;
    }
  }

  private clearMinimumNumericValues(): void {
    this.minimumNumericInput.nativeElement.value = '';
    this.minimumNumericValue = '';
  }

  private clearMaximumNumericValues(): void {
    this.maximumNumericInput.nativeElement.value = '';
    this.maximumNumericValue = '';
  }

  private emitFilterForZero(): void {
    this.filter.emit({columnKey: this.columnKey, valueToFilterOn: ['0', '0'], filterType: this.filterType});
  }

  private emitFilterForCleaning(): void {
    this.filter.emit({columnKey: this.columnKey, valueToFilterOn: [], filterType: this.filterType});
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
