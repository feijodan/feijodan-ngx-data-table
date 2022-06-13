import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'fdn-warning-waiting-server-response',
  templateUrl: './warning-waiting-server-response.component.html',
  styleUrls: ['./warning-waiting-server-response.component.scss']
})
export class WarningWaitingServerResponseComponent {
  /**
   * Message when the server to the user when it's fetching the data
   *
   */
  @Input() waitingServerResponseMessage: string = 'Waiting server response...';
}
