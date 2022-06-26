import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FilterType, IColumnFilterCriteria, IData, IMoveColumnParameter } from '../data-table-models';
import { Subject } from 'rxjs';
import {
  ColumnActionTypeFreeTextComponent
} from './column-action-type/column-action-type-free-text/column-action-type-free-text.component';
import {
  ColumnActionTypeListComponent
} from './column-action-type/column-action-type-list/column-action-type-list.component';
import {
  ColumnActionTypeDateComponent
} from './column-action-type/column-action-type-date/column-action-type-date.component';
import {
  ColumnActionTypeNumericComponent
} from './column-action-type/column-action-type-numeric/column-action-type-numeric.component';
import {
  ColumnActionTypeBaseComponent
} from './column-action-type/column-action-type-base/column-action-type-base.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fdn-column-action',
  templateUrl: './column-action.component.html',
  styleUrls: ['./column-action.component.scss']
})
export class ColumnActionComponent implements OnInit, OnDestroy {
  /**
   * NOT IMPLEMENTED YET!!
   * The all data from the page. It makes the values to select dynamic.
   * e.g. [{"id":"9999", "tag":"192"...}, {"id":"7777", "tag":"113"...}]
   * If you want to pass straight the values to select, use filterValues instead.
   */
  @Input() filterData$!: Subject<IData[]>;
  /**
   * Use filerValues when you want to pass straight the values instead
   * of take it form the data.
   * e.g. ["Bloqueio", "Segurança", "Controle"]
   */
  @Input() filterValues!: string[];
  /**
   * The column to refer to the database to compose the query
   */
  @Input() columnKey!: string;
  @Input() filterType!: FilterType;
  @Input() clearAll$!: Subject<void>;
  @Input() columnLabel!: string;
  @Input() minWidth!: number;
  @Input() autoFilterFocus$!: Subject<boolean>;
  @Input() autoFilterFocusInitialValue!: boolean;
  /**
   * Initial values in the filter with Map<columnKey,valueToFilter>
   */
  @Input() activeFilters!: IColumnFilterCriteria [];
  @Output() filter: EventEmitter<IColumnFilterCriteria> = new EventEmitter();
  @Output() removeColumnEmitter: EventEmitter<string> = new EventEmitter();
  @Output() moveColumnEmitter: EventEmitter<IMoveColumnParameter> = new EventEmitter();

  @ViewChild('container', {read: ViewContainerRef, static: true}) private container!: ViewContainerRef;

  readonly typeToComponentMapper: {[key: string]: any} = {
    freeText: ColumnActionTypeFreeTextComponent,
    list: ColumnActionTypeListComponent,
    date: ColumnActionTypeDateComponent,
    numeric: ColumnActionTypeNumericComponent,
  };

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForType(this.filterType));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const componentRefInstance = <ColumnActionTypeBaseComponent>componentRef.instance;
    componentRefInstance.filterType = this.filterType;
    if (this.filterType === 'list') {
      componentRefInstance.filterData$ = this.filterData$;
      componentRefInstance.filterValues = this.filterValues;
    }
    componentRefInstance.columnKey = this.columnKey;
    componentRefInstance.columnLabel = this.columnLabel;
    componentRefInstance.minWidth = this.minWidth;
    componentRefInstance.activeFilters = this.activeFilters;
    componentRefInstance.clearAll$ = this.clearAll$;
    componentRefInstance.autoFilterFocus = this.autoFilterFocusInitialValue;
    this.autoFilterFocus$.pipe(takeUntil(this.componentDestroyed$))
      .subscribe(value => componentRefInstance.autoFilterFocus = value);
    // Outputs
    componentRefInstance.filter = this.filter;
    componentRefInstance.removeColumnEmitter = this.removeColumnEmitter;
    componentRefInstance.moveColumnEmitter = this.moveColumnEmitter;
  }

  private getComponentForType(type: string): any {
    return this.typeToComponentMapper[type];
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
