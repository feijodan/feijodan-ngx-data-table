import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ColumnActionTypeBaseComponent } from '../column-action-type-base/column-action-type-base.component';
import { IColumnFilterCriteria, IData, IFilterItem } from '../../../data-table-models';
import { Subject } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { takeUntil } from 'rxjs/operators';
import { DataTableUtils } from '../../../data-table-utils';
import { DELEMITER } from '../../../data-table-constants';

@Component({
  selector: 'fdn-column-action-type-list',
  templateUrl: './column-action-type-list.component.html',
  styleUrls: ['../../../action-common.scss']
})
export class ColumnActionTypeListComponent extends ColumnActionTypeBaseComponent implements OnInit, OnDestroy {
  @Input() clearAllTranslatedText: string = 'Clear all';
  @Input() selectAllTranslatedText: string = 'Select all';

  valuesToDisplay = '';
  filterValuesView!: IFilterItem<string>[];

  private isFilterApplied = false;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  /**
   * @returns list of all the selection options for that column based on
   * the list of string passed in filterValues input.
   */
  static getFilterValues(values: string[]): IFilterItem<string>[] {
    return values.map(value => ({value, selected: false}));
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.filterValuesView = ColumnActionTypeListComponent.getFilterValues(this.filterValues);
    if (this.activeFilters.some((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey)) {
      this.applyInitialActiveFilters(this.activeFilters
        .find((columnFilterCriteria: IColumnFilterCriteria) => columnFilterCriteria.columnKey === this.columnKey));
    }
      this.clearAll$.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => this.onClearAll());
      this.filterData$.pipe(takeUntil(this.componentDestroyed$)).subscribe(data => this.filterValuesView = this
        .constructFilterValues(data));
  }

  onCheckbox(event: MatCheckboxChange, item: IFilterItem<string>): void {
    item.selected = event.checked;
    this.emitFilterEventForListType();
  }

  onUnselectAll(): void {
    this.filterValuesView.forEach(item => item.selected = false);
    this.emitFilterEventForListType(false);
  }

  onSelectAll(): void {
    this.filterValuesView.forEach(item => item.selected = true);
    this.emitFilterEventForListType(false);
  }

  private applyInitialActiveFilters(columnFilterCriteria: IColumnFilterCriteria | undefined) {
    if(columnFilterCriteria && columnFilterCriteria.valueToFilterOn) {
      this.valuesToDisplay = columnFilterCriteria.valueToFilterOn.toString();
      this.filterValuesView.forEach((filterItem: IFilterItem<string>) => {
        if (columnFilterCriteria.valueToFilterOn?.some((valueToFilter: string) => valueToFilter
          .toLowerCase() === filterItem.value.toLowerCase())) {
          filterItem.selected = true;
        }
      });
      this.isFilterApplied = true;
    }
  }

  private getSelections(): string[] {
    return this.filterValuesView
      .filter(item => item.selected)
      .map(item => item.value.toString().toLocaleLowerCase());
  }

  /**
   * @returns list of all the selection options for that column based on
   * the columnKey and your data.
   */
  private constructFilterValues(data: IData[]): IFilterItem<string>[] {
    const unique = new Set<string>();
    this.columnKey.split(DELEMITER).forEach(key => {
      const filteredData = data.map(item => item[key]).filter(value => value);
      filteredData.forEach(value => unique.add(value));
    });
    /**
     * Preserve previous selections if any
     */
    if (this.filterValuesView && this.filterValuesView.length > 0) {
      const filterValuesViewUpdate = [...this.filterValuesView];

      // Augment the previous selections filter with new possible values if any
      unique.forEach(value => {
        if (!this.filterValuesView.find(item => item.value === value)) {
          filterValuesViewUpdate.push({value: value, selected: false});
        }
      });
      return filterValuesViewUpdate;
    } else {
      return Array.from(unique).map(value => ({value, selected: false}));
    }
  }

  private emitFilterEventForListType(reset: boolean = false): void {
    let selections: string[] = [];
    if (!reset) {
      selections = this.getSelections();
    }
    this.filter.emit({
      columnKey: this.columnKey,
      valueToFilterOn: [...selections],
      filterType: this.filterType
    });
    this.valuesToDisplay = DataTableUtils.getValueToDisplay(selections);
    this.isFilterApplied = selections.length > 0;
  }

  private onClearAll(): void {
    if (this.isFilterApplied) {
      this.onUnselectAll();
    }
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
