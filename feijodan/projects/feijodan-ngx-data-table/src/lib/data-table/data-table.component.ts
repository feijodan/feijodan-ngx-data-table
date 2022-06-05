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
}
