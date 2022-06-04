import { Component, Input } from '@angular/core';
import { DataTableContentBaseComponent } from '../data-table-content-base/data-table-content-base.component';

@Component({
  selector: 'fdn-data-table-content-date',
  templateUrl: './data-table-content-date.component.html',
  styleUrls: ['../data-table-content-common.scss']
})
export class DataTableContentDateComponent extends DataTableContentBaseComponent {
  /**
   * Date format
   * e.g. 'dd/MM/yyyy' 'yyyy-MM-dd'
   *
   */
  @Input() dateFormat!: string;
}
