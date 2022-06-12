import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ColumnActionTypeBaseComponent } from '../column-action-type-base/column-action-type-base.component';
import { IColumnFilterCriteria } from '../../../data-table-models';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { DataTableUtils } from '../../../data-table-utils';

@Component({
  selector: 'fdn-column-action-type-free-text',
  templateUrl: './column-action-type-free-text.component.html',
  styleUrls: ['../../../action-common.scss']
})
export class ColumnActionTypeFreeTextComponent extends ColumnActionTypeBaseComponent implements OnInit, OnDestroy {
  @ViewChild('freeTextInput') freeTextInput!: ElementRef;

  @Input() filterByTextTranslatedText: string = 'Filter by Text'

  freeText!: string;
  valuesToDisplay = '';

  // private subSink = new SubSink();
  private isFilterApplied = false;
  private isFirstTimeFilterMenuOpen = true;
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

  onFilterMenuOpen(): void {
    if (this.isFirstTimeFilterMenuOpen) {
      fromEvent(this.freeTextInput.nativeElement, 'keyup')
        .pipe(debounceTime(600))
        .subscribe(() => this.updateValuesToDisplayAndEmitFilterEventForFreeTextType(this.freeTextInput.nativeElement.value));
      this.isFirstTimeFilterMenuOpen = false;
    }
    setTimeout(() => this.freeTextInput.nativeElement.focus(), 0);
  }

  clearFreeTextInput(): void {
    this.clearFreeTextValue();
    this.updateValuesToDisplayAndEmitFilterEventForFreeTextType('');
  }

  private applyInitialActiveFilters(columnFilterCriteria: IColumnFilterCriteria | undefined): void {
    if (columnFilterCriteria && columnFilterCriteria.valueToFilterOn) {
      this.freeText = columnFilterCriteria.valueToFilterOn.toString();
      this.valuesToDisplay = columnFilterCriteria.valueToFilterOn.toString();
      this.isFilterApplied = true;
    }
  }

  private updateValuesToDisplayAndEmitFilterEventForFreeTextType(text: string): void {
    this.valuesToDisplay = DataTableUtils.getValueToDisplay([text]);
    this.emitFilterEventForFreeTextType(text);
  }

  private emitFilterEventForFreeTextType(text: string): void {
    const textToFilterBy = text.toLocaleLowerCase();
    if (textToFilterBy) {
      this.filter.emit({columnKey: this.columnKey, valueToFilterOn: [textToFilterBy], filterType: this.filterType});
      this.isFilterApplied = true;
    } else {
      this.emitFilterForCleaning();
      this.isFilterApplied = false;
    }
  }

  private clearFreeTextValue(): void {
    this.freeTextInput.nativeElement.value = '';
  }

  private onClearAll(): void {
    if (this.isFilterApplied) {
      this.clearFreeTextInput();
    }
  }

  private emitFilterForCleaning(): void {
    this.filter.emit({columnKey: this.columnKey, valueToFilterOn: [], filterType: this.filterType});
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
