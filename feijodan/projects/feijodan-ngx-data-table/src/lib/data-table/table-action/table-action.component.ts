import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export interface ColumnInfo {
  columnId: string;
  columnLabel: string;
}

@Component({
  selector: 'fdn-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['../action-common.scss']
})
export class TableActionComponent implements OnChanges {
  @Input() displayedColumns!: ColumnInfo[];
  @Input() allProfileColumns!: ColumnInfo[];
  @Input() autoFilterFocus!: boolean;
  @Output() clearAll: EventEmitter<boolean> = new EventEmitter();
  @Output() addColumn: EventEmitter<string> = new EventEmitter();
  @Output() autoFilterFocusEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  /**
   * Translated text of 'All Columns already in the table'
   *
   */
  @Input() allColumnsAlreadyInTheTableTranslatedText!: string;
  /**
   * Translated text of 'Add Column'
   *
   */
  @Input() addColumnTranslatedText!: string;
  /**
   * Translated text of 'Clean all column filters'
   *
   */
  @Input() cleanAllColumnFiltersTranslatedText!: string;


  columnsToAdd: ColumnInfo[] = [];
  autoFilterFocusValue: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['allProfileColumns'] || changes['displayedColumns']) {
      this.updateColumnItems();
    }
    if (changes && changes.autoFilterFocus && changes.autoFilterFocus.isFirstChange()) {
      this.autoFilterFocusValue = changes.autoFilterFocus.currentValue;
    }
  }

  onAddColumn(column: string): void {
    this.addColumn.emit(column);
  }

  onClearAll(): void {
    this.clearAll.emit(true);
  }

  onFilterFocusChange(matCheckboxChange: MatCheckboxChange): void {
    this.autoFilterFocusEmitter.emit(matCheckboxChange.checked);
  }

  private updateColumnItems(): void {
    this.columnsToAdd = this.allProfileColumns.filter(item => this.displayedColumns.indexOf(item) < 0);
  }
}
