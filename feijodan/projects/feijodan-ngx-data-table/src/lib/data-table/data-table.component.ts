import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import {
  ColumnBaseInfo,
  IColumnFilterCriteria,
  IColumnInfo,
  IData,
  IMoveColumnParameter, IPaginationData,
  TableLineColorType
} from './data-table-models';
import { Sort, SortDirection } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

export interface DataTableTranslatedTexts {
  editInTheSameTabTranslatedText?: string;
  editInOtherTabTranslatedText?: string;
  viewInTheSameTabTranslatedText?: string;
  viewInOtherTabTranslatedText?: string;
  allColumnsAlreadyInTheTableTranslatedText?: string;
  addColumnTranslatedText?: string;
  cleanAllColumnFiltersTranslatedText?: string;
  filterTranslatedText?: string;
  moveColumnTranslatedText?: string;
  removeColumnTranslatedText?: string;
  moveForwardTranslatedText?: string;
  startDateTranslatedText?: string;
  endDateTranslatedText?: string;
  emptyDatesTranslatedText?: string;
  filterByTextTranslatedText?: string;
  waitingServerResponseTranslatedText?: string;
  minimumValueTranslatedText?: string;
  maximumValueTranslatedText?: string;
  onlyNumbersNoDotsOrCommasTranslatedText?: string;
  emptyValuesTranslatedText?: string;
  noRecordsFoundTranslatedText?:string;
}

@Component({
  selector: 'fdn-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges {
  /**
   * Currency code
   * e.g. 'BRL', 'CAD', 'USD'
   *
   */
  @Input() currencyCode!: string;
  /**
   * Date format
   * e.g. 'dd/MM/yyyy', 'yyyy-MM-dd'
   *
   */
  @Input() dateFormat!: string;
  /**
   * Logic to navigate of the application
   *
   */
  @Input() goToUrl!: (path: string, isNewTab: boolean) => void;
  /**
   * Object with all translations for the data table
   *
   */
  @Input() dataTableTranslatedTexts!: DataTableTranslatedTexts
  @Input() dataSource!: any[];
  @Input() paginationData!: IPaginationData;
  @Input() displayedColumnsInfo!: IColumnInfo[];
  @Input() displayedColumns!: ColumnBaseInfo[];
  @Input() allAllowedColumns!: ColumnBaseInfo[];
  @Input() autoFilterFocus!: boolean;
  @Input() activeFilters!: IColumnFilterCriteria [];
  @Input() sortBy!: string;
  @Input() sortDirection!: SortDirection;
  @Input() noData!: boolean;
  @Input() isForOpenProgressBar!: boolean;
  /**
   * Url for the back button.
   * @usageNotes
   * Pass `null` if the data-table doesn't have back button
   * @type {string | null}
   * @public
   */
  @Input() addEmitterUrl!: string | null;
  @Output() matSortChangeEmitter: EventEmitter<Sort> = new EventEmitter<Sort>();
  @Output() addColumnEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterAutoFocusChangeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() filterEmitter: EventEmitter<IColumnFilterCriteria> = new EventEmitter<IColumnFilterCriteria>();
  @Output() moveColumnEmitter: EventEmitter<IMoveColumnParameter> = new EventEmitter<IMoveColumnParameter>();
  @Output() removeColumnEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() paginationChangeEmitter: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  /**
   * Function that define the logic for the row color
   * @param {any} type: Row Object
   * @return {TableLineColorType} rowColor
   *
   */
  @Input() getRowFontColor!: (rowObject: any) => TableLineColorType;

  clearAll$ = new Subject<void>();
  autoFilterFocus$ = new Subject<boolean>();
  // NOT IMPLEMENTED YET. It will make the values to select dynamic.
  filterData$ = new Subject<IData[]>();
  displayedColumnsId: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.autoFilterFocus) {
      this.autoFilterFocus$.next(changes.autoFilterFocus.currentValue);
    }
    if (changes.displayedColumns) {
      this.displayedColumnsId = this.displayedColumns.map((column: ColumnBaseInfo)=> column.id);
    }
  }

  columnLabel(index: number, item: IColumnInfo) {
    return item.label;
  }

  onClearAll(): void {
    this.clearAll$.next();
  }

  onMatSortChange(sort: Sort): void {
    this.matSortChangeEmitter.emit(sort);
  }

  onAddColumn(column: string): void {
    this.addColumnEmitter.emit(column);
  }

  onFilterAutoFocusChange(checked: boolean): void {
    this.filterAutoFocusChangeEmitter.emit(checked);
  }

  onFilter(newCriteria: IColumnFilterCriteria): void {
    this.filterEmitter.emit(newCriteria);
  }

  onMoveColumn(moveColumnParameter: IMoveColumnParameter): void {
    this.moveColumnEmitter.emit(moveColumnParameter);
  }

  onRemoveColumn(columnLabel: string): void {
    this.removeColumnEmitter.emit(columnLabel);
  }

  onPaginationChange(pageEvent: PageEvent): void {
    this.paginationChangeEmitter.emit(pageEvent);
  }
}
