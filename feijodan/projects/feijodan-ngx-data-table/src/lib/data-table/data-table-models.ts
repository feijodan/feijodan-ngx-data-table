export interface ColumnBaseInfo {
  id: string;
  label: string;
}

export interface IColumnInfo extends ColumnBaseInfo{
  label: string;
  filterType: FilterType;
  contentType: ColumnContentType;
  headerWidth: number;
  selectionValues: string[];
  dbColumn: string;
}

export interface IData {
  [key: string]: string;
}

export interface IColumnFilterCriteria {
  columnKey: string;
  valueToFilterOn?: string[];
  filterType: FilterType;
}

export interface IFilterItem<T> {
  value: T;
  selected: boolean;
}

export interface IQueryParams {
  pageSize: number;
  pageIndex: number;
  sortBy: string;
  direction: string;
  searchParams: string;
}

export interface IMoveColumnParameter {
  columnLabel: string;
  moveDirection: MoveDirectionType;
}

export interface DataTableUserConfig {
  dataTableColumns: DataTableColumns;
  filterAutoFocus: boolean;
  itemsPerPage: number;
}

export interface DataTableColumns {
  allProfileColumns: IColumnInfo[];
  displayedColumns: string[];
}

export type MoveDirectionType = 'forward' | 'back';

export type FilterType = 'no-filter' | 'list' | 'freeText' | 'date' | 'numeric';

export type ColumnContentType = 'contentText' | 'contentDate' | 'contentBoolean' | 'contentLink' | 'contentCurrency';

export type DateFilterType = 'interval' | 'nullDate';

export type TableLineColorType = 'red' | 'blue' | 'gray' | 'green' | 'black';
