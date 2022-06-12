import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FilterType, MoveDirectionType } from '../../../data-table-models';
import { MatMenuTrigger } from '@angular/material/menu';

/**
 * Class representing the layout used by all the column-action-type
 */
@Component({
  selector: 'fdn-column-action-type-layout',
  templateUrl: './column-action-type-layout.component.html',
  styleUrls: ['../../../action-common.scss']
})
export class ColumnActionTypeLayoutComponent implements OnInit {
  @Input() contentTemplate!: TemplateRef<any>;
  /**
   * Column label. Should be already translated
   *
   */
  @Input() columnLabel!: string;
  @Input() minWidth!: number;
  @Input() filterType!: FilterType;
  @Input() valuesToDisplay!: string;
  @Input() autoFilterFocus!: boolean;
  /**
   * Translated text of 'Filter'
   *
   */
  @Input() filterTranslatedText!: string;
  /**
   * Translated text of 'Move Column'
   *
   */
  @Input() moveColumnTranslatedText!: string;
  /**
   * Translated text of 'Remove Column'
   *
   */
  @Input() removeColumnTranslatedText!: string;
  /**
   * Translated text of 'Move Forward'
   *
   */
  @Input() moveForwardTranslatedText!: string;

  /**
   * Translated text of 'Move Backward'
   *
   */
  @Input() moveBackwardTranslatedText!: string;

  @Output() filterMenuOpened = new EventEmitter<void>();
  @Output() removeColumnEmitter = new EventEmitter<void>();
  @Output() moveColumnEmitter = new EventEmitter<MoveDirectionType>();

  @ViewChild('filterTemplateTrigger') filterTemplateTrigger!: MatMenuTrigger;

  constructor() {
  }

  ngOnInit(): void {
  }

  onMenuOpen(): void {
    if (this.autoFilterFocus) {
      setTimeout(() => this.filterTemplateTrigger.openMenu(), 300);
    }
  }

  onFilterMenuOpen(): void {
    this.filterMenuOpened.emit();
  }

  removeColumn(): void {
    this.removeColumnEmitter.emit();
  }

  moveColumn(moveDirection: MoveDirectionType): void {
    this.moveColumnEmitter.emit(moveDirection);
  }
}
