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
   * Translated text of 'Edit in the same tab'
   *
   */
  editInTheSameTabTranslatedText!: string;
  /**
   * Translated text of 'Edit in other tab'
   *
   */
  editInOtherTabTranslatedText!: string;
  /**
   * Translated text of 'View in the same tab'
   *
   */
  viewInTheSameTabTranslatedText!: string;
  /**
   * Translated text of 'View in other tab'
   *
   */
  viewInOtherTabTranslatedText!: string;
}
