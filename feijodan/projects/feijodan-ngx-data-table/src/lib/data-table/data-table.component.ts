import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fdn-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  /**
   * Message when the server to the user when it's fetching the data
   * e.g. 'Fetching data in the server...', 'Waiting the server...'
   *
   */
  @Input() waitingServerResponseMessage!: Observable<string> | string;
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
   * Translated text of 'Edit in the same tab'
   *
   */
  @Input() editInTheSameTabTranslatedText!: string;
  /**
   * Translated text of 'Edit in other tab'
   *
   */
  @Input() editInOtherTabTranslatedText!: string;
  /**
   * Translated text of 'View in the same tab'
   *
   */
  @Input() viewInTheSameTabTranslatedText!: string;
  /**
   * Translated text of 'View in other tab'
   *
   */
  @Input() viewInOtherTabTranslatedText!: string;
  /**
   * Translated text of 'All Columns already in the table'
   *
   */
  @Input() allColumnsAlreadyInTheTableTranslatedText!: string;
  /**
   * Translated Text of 'Add Column'
   *
   */
  @Input() addColumnTranslatedText!: string;
  /**
   * Translated text of 'Clean all column filters'
   *
   */
  @Input() cleanAllColumnFiltersTranslatedText!: string;
}
