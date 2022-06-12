import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataTableTranslatedTexts {
  editInTheSameTabTranslatedText: string;
  editInOtherTabTranslatedText: string;
  viewInTheSameTabTranslatedText: string;
  viewInOtherTabTranslatedText: string;
  allColumnsAlreadyInTheTableTranslatedText: string;
  addColumnTranslatedText: string;
  cleanAllColumnFiltersTranslatedText: string;
  filterTranslatedText: string;
  moveColumnTranslatedText: string;
  removeColumnTranslatedText: string;
  moveForwardTranslatedText: string;
  startDateTranslatedText: string;
  endDateTranslatedText: string;
  emptyDatesTranslatedText: string;
  filterByTextTranslatedText: string;
}

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
   * Object with all translations for the data table
   *
   */
  @Input() dataTableTranslatedTexts!: DataTableTranslatedTexts
}
