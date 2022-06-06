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
   * 'Edit in the same tab' translated text
   *
   */
  @Input() editInTheSameTabText!: string;
  /**
   * 'Edit in other tab' translated text
   *
   */
  @Input() editInOtherTabText!: string;
  /**
   * 'View in the same tab' translated text
   *
   */
  @Input() viewInTheSameTabText!: string;
  /**
   * 'View in other tab' translated text
   *
   */
  @Input() viewInOtherTabText!: string;
}
