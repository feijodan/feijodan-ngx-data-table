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
  /**
   * Logic to navigate of the application
   *
   */
  goToUrl!: (path: string, isNewTab: boolean) => void;
  /**
   * 'Edit in the same tab' translated text
   *
   */
  editInTheSameTabText!: string;
  /**
   * 'Edit in other tab' translated text
   *
   */
  editInOtherTabText!: string;
  /**
   * 'View in the same tab' translated text
   *
   */
  viewInTheSameTabText!: string;
  /**
   * 'View in other tab' translated text
   *
   */
  viewInOtherTabText!: string;
}
