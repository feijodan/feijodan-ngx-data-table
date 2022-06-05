import { Input } from '@angular/core';

export abstract class DataTableContentBaseComponent {
  contentType!: string;
  content!: string;
  fontColor!: string;
  /**
   * Date format
   * e.g. 'dd/MM/yyyy', 'yyyy-MM-dd'
   *
   */
  dateFormat!: string;
  /**
   * Currency code
   * e.g. 'BRL', 'CAD', 'USD'
   *
   */
  currencyCode!: string;
}
