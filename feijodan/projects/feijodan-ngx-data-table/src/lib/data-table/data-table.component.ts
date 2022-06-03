import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fdn-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  /**
   * Message when the server to the user when it's fetching the data
   *
   */
  @Input() waitingServerResponseMessage!: Observable<string> | string;

}
