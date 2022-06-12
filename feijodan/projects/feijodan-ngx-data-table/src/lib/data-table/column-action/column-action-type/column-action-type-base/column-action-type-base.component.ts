import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {
  FilterType,
  IColumnFilterCriteria,
  IData,
  IMoveColumnParameter,
  MoveDirectionType
} from '../../../data-table-models';

@Component({template: ''})
export abstract class ColumnActionTypeBaseComponent {
  /**
   * NOT IMPLEMENTED YET!!
   * The all data from the page. It makes the values to select dynamic.
   * e.g. [{"id":"9999", "tag":"192"...}, {"id":"7777", "tag":"113"...}]
   * If you want to pass straight the values to select, use filterValues instead.
   */
  filterData$!: Subject<IData[]>;
  /**
   * Use filerValues when you want to pass straight the values instead
   * of take it form the data.
   * e.g. ['Block', 'Security', 'Control']
   */
  filterValues!: string[];
  /**
   * The column to refer to the database to compose the query
   */
  columnKey!: string;
  filterType!: FilterType;
  clearAll$!: Subject<void>;
  /**
   * Label of the column. Should be already translated.
   *
   */
  columnLabel!: string;
  minWidth!: number;
  autoFilterFocus!: boolean;
  /**
   * Initial values in the filter with Map<columnKey,valueToFilter>
   */
  activeFilters!: IColumnFilterCriteria [];

  @Output() filter: EventEmitter<IColumnFilterCriteria> = new EventEmitter();
  @Output() removeColumnEmitter: EventEmitter<string> = new EventEmitter();
  @Output() moveColumnEmitter: EventEmitter<IMoveColumnParameter> = new EventEmitter();

  removeColumn(): void {
    this.clearAll$.next();
    this.removeColumnEmitter.emit(this.columnLabel);
  }

  moveColumn(moveDirection: MoveDirectionType): void {
    this.moveColumnEmitter.emit({columnLabel: this.columnLabel, moveDirection: moveDirection});
  }
}
